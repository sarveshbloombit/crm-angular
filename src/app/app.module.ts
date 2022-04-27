import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AssistedSignUpComponent } from './assisted-sign-up/assisted-sign-up.component';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { DashboardFormsComponent } from './dashboard-forms/dashboard-forms.component';
import { FormsEditViewComponent } from './forms-edit-view/forms-edit-view.component';
import { FormsDetailViewComponent } from './forms-detail-view/forms-detail-view.component';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AssistedSignUpComponent,
    DashboardOverviewComponent,
    DashboardFormsComponent,
    FormsEditViewComponent,
    FormsDetailViewComponent,
    UserDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
