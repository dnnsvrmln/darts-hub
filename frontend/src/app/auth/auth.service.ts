import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

export interface AuthResponseBody {
  idToken: string;
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

  constructor(private httpClient: HttpClient) {
  }

  public signUp(email: string, password: string, passwordConfirm: string) {
    if (!AuthService.isPasswordConfirmed(password, passwordConfirm)) {
      return AuthService.handleErrorResponse("PASSWORD_DO_NOT_MATCH");
    }

    return this.httpClient.post<AuthResponseBody>(
      AuthService._SIGN_UP_URL,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(AuthService.handleErrorResponse));
  }

  public signIn(email: string, password: string) {
    return this.httpClient.post<AuthResponseBody>(
      AuthService._SIGN_IN_URL,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(AuthService.handleErrorResponse));
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

  private static isPasswordConfirmed(password: string, passwordConfirm: string): boolean {
    return password === passwordConfirm;
  }
}
