import { NgModule } from '@angular/core';
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
import { AddDormComponent } from './add-dorm/add-dorm.component';
import { UpdateDormComponent } from './update-dorm/update-dorm.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';



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
  { path: 'register' , component: RegisterComponent},
  { path: 'addcandidacy/:id' , component: AddCandidacyComponent},
  { path: 'addReservation' , component: AddReservationComponent},

  { path: 'addDorm' , component: AddDormComponent},
  { path: 'ListReservation' , component: ListReservationComponent},


  { path: 'UpdateDorm/:id' , component: UpdateDormComponent},
  { path: 'UpdateReservation/:id' , component: UpdateReservationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
