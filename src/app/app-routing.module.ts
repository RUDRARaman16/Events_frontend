import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewEventComponent } from './view-event/view-event.component';

const routes: Routes = [
  {
    path:'dashboard',component:DashboardComponent
  },
  {
      path:'',component:LoginComponent 
  },
  {
    path:'register',component:RegisterComponent
},
{
  path:'addEvent',component:AddEventComponent
},
{
  path:'view',component:ViewEventComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
