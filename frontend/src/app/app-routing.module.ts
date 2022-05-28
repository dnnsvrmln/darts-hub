import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";
import {SomeTestComponent} from "./some-test/some-test.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'some-test', component: SomeTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
