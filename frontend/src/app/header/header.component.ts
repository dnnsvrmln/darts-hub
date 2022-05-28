import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _userSubscription: Subscription = new Subscription;

  public isAuthenticated = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this._userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onSignOut() {
    this.authService.signOut();
  }

  ngOnDestroy() {
    this._userSubscription.unsubscribe();
  }

}
