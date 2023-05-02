import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CandidacyService implements OnInit {
   readonly candidacyURL='http://localhost:8085/api/test'
   constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {

  }

 getAllCandidacy() {
   return this.httpClient.get(`${this.candidacyURL}/AllCandidancy`)
 }
 addCandidacy(candidacy : any) {
  return this.httpClient.post(`${this.candidacyURL}/addCandidancy`, candidacy)
}
}
