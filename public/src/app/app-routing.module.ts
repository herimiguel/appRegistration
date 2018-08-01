import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationloginComponent } from './registrationlogin/registrationlogin.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';


const routes: Routes = [
  {path: '', pathMatch:'full', component: RegistrationloginComponent},
  {path: 'home', pathMatch:'full', component: HomeComponent},
  {path: 'form', pathMatch:'full', component: AppointmentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
