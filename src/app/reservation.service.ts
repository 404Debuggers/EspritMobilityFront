import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidacy } from './class/candidacy';
import { Reservation } from './Reservation.model';

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
  candidacy!: Candidacy ;




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
    AddReservation(reservation : Reservation, did:any):Observable<Object>{
      let cid =this.candidacy.candidatureId
      return this.http.post(`${this.addReservation}/${cid}/${did}`,{documents:reservation.documents});
    
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
    updateReservations(reserv : Reservation,id : number,idd:number):Observable<Object>{
      return this.http.put<any>(`${this.updateReservation}/${id}`,reserv);
      }

      GetReservationById(id : number):Observable<any>{
        return this.http.get<any>(`${this.getReservationById}/${id}`)
      }


      payDormFees(cardNumber: string, expMonth: string, expYear: string, cvc: string, amount: number, currency: string, reservationId: number, recipientEmail: string): Observable<any> {
        const url = `${this.apiUrl}/dorm-payment`;
        const body = {
          cardNumber: cardNumber,
          expMonth: expMonth,
          expYear: expYear,
          cvc: cvc,
          amount: amount,
          currency: currency,
          reservationId: reservationId,
          recipientEmail: recipientEmail
        };
        return this.http.post<any>(url, body);
      }

  constructor(private http : HttpClient) { }
}
