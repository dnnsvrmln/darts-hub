import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject, catchError, Observable, tap, throwError} from "rxjs";

import {UserModel} from "./user.model";

export interface AuthResponseBody {
  kind: string;
  idToken: string;
  displayName: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: "root"})
export class AuthService {
  private static readonly _SIGN_UP_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC0jI1vR0Cz8wsxiEmbrNVi9tv-sY39A9A";
  private static readonly _SIGN_IN_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0jI1vR0Cz8wsxiEmbrNVi9tv-sY39A9A";
  private static readonly _LOCAL_STORAGE_KEY = "userDataLocalStorage";
  private static readonly _SESSION_STORAGE_KEY = "userDataSessionStorage";

  public user = new BehaviorSubject<UserModel | null>(null);

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public signUp(displayName: string, email: string, password: string, passwordConfirm: string) {
    if (!AuthService.isPasswordConfirmed(password, passwordConfirm)) {
      return AuthService.handleErrorResponse("PASSWORD_DO_NOT_MATCH");
    }

    return this.httpClient.post<AuthResponseBody>(
      AuthService._SIGN_UP_URL,
      {
        displayName: displayName,
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(AuthService.handleErrorResponse), tap(responseData => {
        this.handleAuthentication(
          responseData.displayName,
          responseData.email,
          responseData.localId,
          responseData.idToken,
          +responseData.expiresIn
        );
      })
    );
  }

  public signIn(email: string, password: string, rememberMe: boolean) {
    return this.httpClient.post<AuthResponseBody>(
      AuthService._SIGN_IN_URL,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(AuthService.handleErrorResponse), tap(responseData => {
        this.handleAuthentication(
          responseData.displayName,
          responseData.email,
          responseData.localId,
          responseData.idToken,
          +responseData.expiresIn,
          rememberMe
        );
      })
    );
  }

  public autoSignIn() {
    this.handleAutoSignIn();
  }

  public signOut() {
    this.user.next(null);
    this.router.navigate(['/auth']);

    if (localStorage.getItem(AuthService._LOCAL_STORAGE_KEY) !== null) {
      localStorage.removeItem(AuthService._LOCAL_STORAGE_KEY);
    } else {
      sessionStorage.removeItem(AuthService._SESSION_STORAGE_KEY);
    }
  }

  private static isPasswordConfirmed(password: string, passwordConfirm: string): boolean {
    return password === passwordConfirm;
  }

  private static handleErrorResponse(errorMessage: string): Observable<any> {
    switch (errorMessage) {
      case "EMAIL_EXISTS":
        errorMessage = "The email address is already in use by another account.";
        break;
      case "OPERATION_NOT_ALLOWED":
        errorMessage = "Password sign-in is disabled for this project.";
        break;
      case "TOO_MANY_ATTEMPTS_TRY_LATER":
        errorMessage = "We have blocked all requests from this device due to unusual activity. Try again later."
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = "The username and/or password are invalid.";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "The username and/or password are invalid.";
        break;
      case "USER_DISABLED":
        errorMessage = "The user account has been disabled by an administrator.";
        break;
      case "PASSWORD_DO_NOT_MATCH":
        errorMessage = "The passwords do not match."
        break;
      default:
        errorMessage = "Oops! An unknown error occurred."
    }
    return throwError(errorMessage);
  }

  private handleAuthentication(displayName: string, email: string, localId: string, idToken: string, expiresIn: number, rememberMe?: boolean) {
    const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000));
    const user = new UserModel(displayName, email, localId, idToken, expirationDate);
    this.user.next(user);

    if (rememberMe) {
      localStorage.setItem(AuthService._LOCAL_STORAGE_KEY, JSON.stringify(user));
    } else {
      sessionStorage.setItem(AuthService._SESSION_STORAGE_KEY, JSON.stringify(user));
    }
  }

  private handleAutoSignIn() {
    const userData: {
      displayName: string;
      email: string;
      localId: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem(AuthService._LOCAL_STORAGE_KEY)!);

    if (!userData) {
      return;
    }

    const loadedUser = new UserModel(
      userData.displayName,
      userData.email,
      userData.localId,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
    }
  }
}
