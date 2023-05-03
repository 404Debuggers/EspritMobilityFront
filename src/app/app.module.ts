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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { OfferBackComponent } from './offer-back/offer-back.component';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { ChartComponent } from './chart/chart.component';

import { CommonModule } from '@angular/common';
import { ProgramOfferComponent } from './program-offer/program-offer.component';
import { ChartsModule } from 'ng2-charts';







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
    
    OfferBackComponent,
         EditOfferComponent,
         ChartComponent,
         ProgramOfferComponent,
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
