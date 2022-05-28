import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthComponent} from "./auth/auth.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";
import {SomeTestComponent} from "./some-test/some-test.component";
import {AuthGuard} from "./auth/auth.guard";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'some-test', component: SomeTestComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
