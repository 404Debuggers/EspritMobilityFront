import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidacyComponent } from './candidacy/candidacy.component';
import { OfferComponent } from './offer/offer.component';
import { ReportComponent } from './report/report.component';
import { DormitoriesComponent } from './dormitories/dormitories.component';
import { InterviewComponent } from './interview/interview.component';
import { OfferBackComponent } from './offer-back/offer-back.component';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './FrontOffice/landing-page/landing-page.component';
import { EditOfferComponent } from './edit-offer/edit-offer.component';


const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full'  },
  { path: '', component: LandingPageComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'candidacy', component: CandidacyComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'report', component: ReportComponent },
  { path: 'dormitories', component: DormitoriesComponent },
  { path: 'interview', component: OfferBackComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'edit-offer/:offerId', component: EditOfferComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
