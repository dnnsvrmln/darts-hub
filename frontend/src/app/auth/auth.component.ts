import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";

import {AuthResponseBody, AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public isLoading = false;
  public isSignInMode = true;
  public errorMessage = "";

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  public onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.handleAuth(form);

    form.reset();
  }

  public onSwitchMode() {
    this.isSignInMode = !this.isSignInMode;
  }

  private handleAuth(form: NgForm) {
    let authObservable: Observable<AuthResponseBody>;

    this.isLoading = true;

    if (this.isSignInMode) {
      const emailSignIn = form.value.emailSignIn.toLowerCase();
      const passwordSignIn = form.value.passwordSignIn;

      authObservable = this.authService.signIn(emailSignIn, passwordSignIn);
    } else {
      const emailSignUp = form.value.emailSignUp.toLowerCase();
      const passwordSignUp = form.value.passwordSignUp;
      const passwordConfirmSignUp = form.value.passwordConfirmSignUp;

      authObservable = this.authService.signUp(emailSignUp, passwordSignUp, passwordConfirmSignUp);
    }

    authObservable.subscribe(
      responseBody => {
        console.log(responseBody);
        this.isLoading = false;
      },
      responseError => {
        console.log(responseError);
        this.errorMessage = responseError;
        this.isLoading = false;
      }
    );
  }
}
