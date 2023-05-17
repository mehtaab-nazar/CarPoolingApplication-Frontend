import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsComponent } from './components/options/options.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { BookOfferRideComponent } from './components/book-offer-ride/book-offer-ride.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
{path:'',component:LoginPageComponent},
 {path:'options',component:OptionsComponent,canActivate:[AuthGuard]},
 {path:'login',component:LoginPageComponent},
 {path:'signup',component:SignupPageComponent},
 {path:'ride',
 children:[
  {path:'book-ride',component:BookOfferRideComponent,data:{offerRide:false}},
  {path:'offer-ride',component:BookOfferRideComponent,data:{offerRide:true}}
],canActivate:[AuthGuard]},
 {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
 {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
 { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
