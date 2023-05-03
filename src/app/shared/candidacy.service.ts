import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidacy } from '../class/candidacy';
import { Offer } from '../class/offer';
import { idText } from 'typescript';


@Injectable({
  providedIn: 'root'
})
export class CandidacyService implements OnInit {
   readonly candidacyURL='http://localhost:8085/api/test'
   constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {

  }

//  getAllCandidacy() {
//    return this.httpClient.get(`${this.candidacyURL}/AllCandidancy`)
//  }
//  addCandidacy(candidacy : any) {
//    const id = candidacy.offerId ||0;
//    return this.httpClient.post(`${this.candidacyURL}/addCandidancy/${id}`, candidacy);

//  }
getAllCandidacy(): Observable<Candidacy[]> {
  return this.httpClient.get<Candidacy[]>(`${this.candidacyURL}/AllCandidancy`);
}
addCandidacy(candidacy: any, attachements: any, B2Fr: any, B2Eng: any) {
  const formData = new FormData();
  formData.append('attachments', attachements);
  formData.append('B2Fr', B2Fr);
  formData.append('B2Eng', B2Eng);
  formData.append('candidacy', JSON.stringify(candidacy));
  console.log("candidacy.offer.offerId");
  return this.httpClient.post(`${this.candidacyURL}/addCandidancy/${candidacy.offer.offerId}`, formData);
  console.log("candidacy.offer.offerId");
}

}
