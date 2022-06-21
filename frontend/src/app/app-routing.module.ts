import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SomeTestComponent} from "./some-test/some-test.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {MatchComponent} from "./match/match.component";
import {IngameComponent} from "./ingame/ingame.component";
import {LegComponent} from "./leg/leg.component";
import {AuthGuard} from "./auth/auth.guard";

const appRoutes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "auth", component: AuthComponent },
  { path: "some-test", component: SomeTestComponent },
  { path: "match", component: MatchComponent },
  { path: "ingame", component: IngameComponent },
  { path: "score", component: LegComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard], children: [
      // { path: "profile", component:  ProfileComponent },
      // { path: "statistics", component:  StatisticsComponent },
    ]
  },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/page-not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
