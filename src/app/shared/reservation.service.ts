import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dormitories } from '../class/dormitories';
import { Candidacy } from '../class/candidacy';
import { Observable } from 'rxjs';
import { Reservation } from '../class/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private listReservation = 'http://localhost:8085/api/test/getAllReservation';
  private  deleteReservation ='http://localhost:8085/api/test/deleteReservation';
  private addReservation = 'http://localhost:8085/api/test/addReservation';
  private getAllCondidcay = "http://localhost:8085/api/test/AllCandidancy";
  private getAllDorm = "http://localhost:8085/api/test/getAllDorm";
  private updateReservation ="http://localhost:8085/api/test/UpdateReservation";
  private getReservationById ="http://localhost:8085/api/test/getReservationById";
  private apiUrl ="http://localhost:8085/api/test";
  private pay = 'http://localhost:8085/api/test';
  candidacy!: Candidacy ;
  dorm: Dormitories | undefined

  constructor(private http : HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  getAllReservations():Observable<any[]>{
    return this.http.get<any[]>(this.listReservation,this.httpOptions);
    }
    DeleteReservation(id : number):Observable<any>{
      return this.http.delete<any>(`${this.deleteReservation}/${id}`);
    }
    AddReservation(reservation: Reservation, cidd:any,did:any ): Observable<Object> {


      return this.http.post(`${this.addReservation}/${cidd}/${did}`, reservation, this.httpOptions);
    }
    GetAllCondidacy():Observable<any[]>{
      const token = sessionStorage.getItem('Token');
      console.info(token);
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
      return this.http.get<any[]>(this.getAllCondidcay , {headers})
    }
    GetAllDorm():Observable<any[]>{
      const token = sessionStorage.getItem('Token');
      console.info(token);
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
      return this.http.get<any[]>(this.getAllDorm, {headers})
    }
    updateReservations(reserv : Reservation,id : number,idd=this.dorm?.dormitoriesId):Observable<Object>{
      return this.http.put<any>(`${this.updateReservation}/${id}/${idd}`,reserv);
      }
      GetReservationById(id : number):Observable<any>{
        return this.http.get<any>(`${this.getReservationById}/${id}`)
      }
      payDormFees(cardNumber: string, expMonth: string, expYear: string, cvc: string, amount: number, currency: string, reservationId: number, recipientEmail: string) {
                const url = `${this.pay}/payDormFees`;
                const body = {
                  cardNumber,
                  expMonth,
                  expYear,
                  cvc,
                  amount,
                  currency,
                  reservationId,
                  recipientEmail
                };
                return this.http.post(url, body);
              }

}
