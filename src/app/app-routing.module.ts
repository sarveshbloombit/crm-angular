import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistedSignUpComponent } from './assisted-sign-up/assisted-sign-up.component';
import { DashboardFormsComponent } from './dashboard-forms/dashboard-forms.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [

  {path: '' , component: LandingComponent},
    {path: 'assisted-sign-up' , component: AssistedSignUpComponent},
    {path: 'dashboard-forms' , component: DashboardFormsComponent},
    {path: 'dashboard-overview' , component: AssistedSignUpComponent},
    {path: 'forms-detail-view' , component: AssistedSignUpComponent},
    {path: 'forms-edit-view' , component: AssistedSignUpComponent},
    {path: 'user-detail-view' , component: AssistedSignUpComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
