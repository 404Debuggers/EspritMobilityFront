import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidacyComponent } from './candidacy/candidacy.component';
import { OfferComponent } from './offer/offer.component';
import { ReportComponent } from './report/report.component';
import { DormitoriesComponent } from './dormitories/dormitories.component';
import { InterviewComponent } from './interview/interview.component';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './FrontOffice/landing-page/landing-page.component';
import {RegisterComponent} from "./register/register.component";
import { AddCandidacyComponent } from './add-candidacy/add-candidacy.component';
import { ViewCandidacyByofferComponent } from './view-candidacy-byoffer/view-candidacy-byoffer.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { EventComponent } from './event/event.component';
import { AddReportComponent } from './add-report/add-report.component';
import { AddReportResponseComponent } from './add-report-response/add-report-response.component';
import { ReportResponseComponent } from './report-response/report-response.component';
import { UpdateDormComponent } from './update-dorm/update-dorm.component';
import { AddDormComponent } from './add-dorm/add-dorm.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { ChartComponent } from './chart/chart.component';
import { UniversityComponent } from './university/university.component';
import { ProgrammeOffreComponent } from './programme-offre/programme-offre.component';
import { PublicationComponent } from './publication/publication.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { PayementComponent } from './payement/payement.component';




const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full'  },
  { path: '', component: LandingPageComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'candidacy', component: CandidacyComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'report', component: ReportComponent },
  { path: 'dormitories', component: DormitoriesComponent },
  { path: 'interview', component: InterviewComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'addcandidacy/:id' , component: AddCandidacyComponent},
  { path: 'viewcandidacybyoffer/:id' , component: ViewCandidacyByofferComponent},
  { path: 'addoffer' , component: AddOfferComponent},
  { path: 'editoffer/:offerId' , component: EditOfferComponent},
  { path: 'event' , component: EventComponent},
  { path:  'addreport', component: AddReportComponent},
  { path: 'addreportresponse/:id', component: AddReportResponseComponent},
  { path: 'reponseReport', component:ReportResponseComponent},
  { path: 'updateDorm/:id', component:UpdateDormComponent},
  { path: 'addDorm', component:AddDormComponent },
  { path: 'addReservation/:id', component:AddReservationComponent },
  { path: 'Reservation', component:ReservationComponent },
  { path: 'updateReservation/:id' , component: UpdateReservationComponent},
  { path: 'chart/:offerId', component: ChartComponent},
  { path: 'university', component:UniversityComponent},
  { path: 'programOffer', component:ProgrammeOffreComponent},
  { path: 'publication' , component:PublicationComponent},
  { path: 'register' , component:UserComponent},
  { path: 'profile' , component:ProfileComponent},
  { path : 'favlist' , component:FavoriteListComponent},
  { path: 'payment', component:PayementComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
