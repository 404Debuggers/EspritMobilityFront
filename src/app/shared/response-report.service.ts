import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReponseReport } from '../class/reponse-report';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseReportService {
  readonly reponseURL='http://localhost:8085/api/test'
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
   this. getAllReponse();
  }
  getAllReponse() {
    return this.httpClient.get(`${this.reponseURL}/AllReponse`)
  }
  addReponse(id: number, reponseReport:ReponseReport): Observable<any[]> {
    const token = sessionStorage.getItem('Token');
    const headers = { 'Authorization': `Bearer ${token}` };
    return this.httpClient.post<any[]>(`${this.reponseURL}/addReponse/${id}`, reponseReport,{ headers: headers });
  }
}
