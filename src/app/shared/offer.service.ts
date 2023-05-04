import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from '../class/offer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  readonly API_URL = 'http://localhost:8085/api/test';
  constructor(private httpClient: HttpClient) { }
  getAllOffer() {
    return this.httpClient.get(`${this.API_URL}/getAlloffers`)
  }
  getOfferById(id: number): Observable<Offer> {
    return this.httpClient.get<Offer>(`${this.API_URL}/${id}`);
  }
  addOffer(offer : any) {
    return this.httpClient.post(`${this.API_URL}/add_Offer`, offer)
  }
deleteOffer(offerId : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-offer/${offerId}`)
  }
  editOffer(Offer : any){
    return this.httpClient.put(`${this.API_URL}/update_Offer`, Offer)

}
}
