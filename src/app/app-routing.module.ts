import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistedSignUpComponent } from './assisted-sign-up/assisted-sign-up.component';
import { DashboardFormsComponent } from './dashboard-forms/dashboard-forms.component';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { FormsDetailViewComponent } from './forms-detail-view/forms-detail-view.component';
import { FormsEditViewComponent } from './forms-edit-view/forms-edit-view.component';
import { LandingComponent } from './landing/landing.component';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';

const routes: Routes = [

  {path: '' , component: LandingComponent},
    {path: 'assisted-sign-up' , component: AssistedSignUpComponent},
    {path: 'dashboard-forms' , component: DashboardFormsComponent},
    {path: 'dashboard-overview' , component: DashboardOverviewComponent},
    {path: 'forms-detail-view' , component: FormsDetailViewComponent},
    {path: 'forms-edit-view' , component: FormsEditViewComponent},
    {path: 'user-detail-view' , component: UserDetailViewComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
