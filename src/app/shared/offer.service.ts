import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from '../class/offer';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  readonly API_URL = 'http://localhost:8085';

  constructor(private httpClient: HttpClient) { }

  getAllOffer() {
    return this.httpClient.get(`${this.API_URL}/api/test/getAlloffers`)
  }

  addOffer(offer : any) {
    return this.httpClient.post(`${this.API_URL}/api/test/add_Offer`, offer)
  }

  deleteOffer(offerId : any){
    return  this.httpClient.delete(`${this.API_URL}/api/test/remove-offer/${offerId}`)
  }

  editOffer(Offer : any){
    return this.httpClient.put(`${this.API_URL}/api/test/update_Offer`, Offer)
  
}
getofferbyid(offerId : any){
return this.httpClient.get(`${this.API_URL}/api/test/getofferbyid/${offerId}`)
}

getChartsForOffer(offerId: any): Observable<Map<any, any>> {
  const url = `${this.API_URL}/api/test/offers/${offerId}/charts`;
  return this.httpClient.get<Map<any, any>>(url).pipe(
    map(response => new Map(Object.entries(response)))
  );
}

}
