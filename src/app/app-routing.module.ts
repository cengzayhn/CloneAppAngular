import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ContentComponent} from "./components/content/content.component";

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:"full"},
  {path:'login',component:LoginPageComponent},
  {path:'dashboard',component:ContentComponent},
  {path:'register',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
