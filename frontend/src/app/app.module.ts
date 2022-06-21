import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatSliderModule } from '@angular/material/slider';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from "apollo-angular-link-http";
import { GraphQLModule } from "./graphql.module";

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from "./app-routing.module";
import { SomeTestComponent } from './some-test/some-test.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatchComponent } from "./match/match.component";
import { IngameComponent } from './ingame/ingame.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { LegComponent } from "./leg/leg.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    SomeTestComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    StatisticsComponent,
    PageNotFoundComponent,
    MatchComponent,
    IngameComponent,
    CreateGameComponent,
    PageNotFoundComponent,
    LegComponent
  ],
  imports: [
    GraphQLModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSliderModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  exports: [
    MatSliderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
