import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from '../class/offer';
import { Observable, map } from 'rxjs';
import { url } from 'inspector';

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
getofferbyid(offerId : any){
  return this.httpClient.get(`${this.API_URL}/getofferbyid/${offerId}`)
  }

  getChartsForOffer(offerId: any): Observable<Map<any, any>> {
    const url = `${this.API_URL}/offers/${offerId}/charts`;
    return this.httpClient.get<Map<any, any>>(url).pipe(
      map(response => new Map(Object.entries(response)))
    );
  }


  addOfferAtSpecificTime(offer: Offer, offerTime: string): Observable<Offer> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Offer-Time': offerTime
    });

    return this.httpClient.post<Offer>(`${this.API_URL}/offersaddwithdate`, offer, { headers });

  }

  getSimilarOffers(userId: any) {
    return this.httpClient.get<any>(`${this.API_URL}/findOffersWithS/${userId}`);
  }


  getFavOffers(userId: any): Observable<Offer[]> {
    const url = `${this.API_URL}/getfavoffer/${userId}`;
    return this.httpClient.get<Offer[]>(url);
  }

  addFavandAssigntouser(userId: any, offerId: any): Observable<any> {

    const url = `${this.API_URL}/addfavofferandAssignToUser/${userId}/${offerId}`;
    return this.httpClient.get(url);
  }

  deleteFavorite(userId: any, offerId: any): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/users/${userId}/favorites/${offerId}`);
  }

}
