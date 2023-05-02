import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidacy } from '../class/candidacy';
import { Observable } from 'rxjs';
import { Interview } from '../class/interview';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  readonly API_URL = 'http://localhost:8085/api/test';
  
  constructor(private httpClient: HttpClient) { }

  affichertoutentretien() {
    return this.httpClient.get(`${this.API_URL}/affichertoutentretien`)
  }
  createEntretien(interview: any) {
    return this.httpClient.post(`${this.API_URL}/ajouterentretien/${interview.candidatureId}/${interview.universityId}`, interview);
  }
  modifierrentretienne(interview : any, interviewId : any){
    return this.httpClient.put(`${this.API_URL}/modifierrentretien/${interviewId}`, interview)
  }
  supprimerentretien(interviewId : any){
    return  this.httpClient.delete(`${this.API_URL}/supprimerentretien/${interviewId}`)
  }
}
