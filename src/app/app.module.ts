import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { CandidacyComponent } from './candidacy/candidacy.component';
import { OfferComponent } from './offer/offer.component';
import { BlogComponent } from './blog/blog.component';
import { ReportComponent } from './report/report.component';
import { InterviewComponent } from './interview/interview.component';
import { DormitoriesComponent } from './dormitories/dormitories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './FrontOffice/landing-page/landing-page.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule } from  '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCandidacyComponent } from './add-candidacy/add-candidacy.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AddDormComponent } from './add-dorm/add-dorm.component';
import { UpdateDormComponent } from './update-dorm/update-dorm.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CandidacyComponent,
    OfferComponent,
    BlogComponent,
    ReportComponent,
    InterviewComponent,
    DormitoriesComponent,
    DashboardComponent,
    LoginComponent,
    LandingPageComponent,
    ForbiddenComponent,
    RegisterComponent,
    AddCandidacyComponent,
    AddDormComponent,
    UpdateDormComponent,
    ListReservationComponent,
    AddReservationComponent,
    UpdateReservationComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
