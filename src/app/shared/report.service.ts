import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Report } from '../class/report';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService implements OnInit {
  readonly reportURL='http://localhost:8085/api/test'
  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {
    this.getAllReport();
    this.percentage();
  }
  getAllReport() {
    return this.httpClient.get(`${this.reportURL}/AllReport`)
  }
  getAllArchivedReport(): Observable<Report[]> {
    return this.httpClient.get<Report[]>(`${this.reportURL}/AllArchivedReport`);
  }
  archiveReport(id:any):Observable<Object>{
    return this.httpClient.get(`${this.reportURL}/archiveReport/${id}`)
   }
   RestoreReport(id:any):Observable<Object>{
    return this.httpClient.get(`${this.reportURL}/restoreReport/${id}`)
   }
  getCurrentReports():Observable<Report[]>{
    const token = sessionStorage.getItem('Token');
    const headers = { 'Authorization': `Bearer ${token}` };
   return this.httpClient.get<Report[]>(`${this.reportURL}/current-user/reports`, { headers: headers });

  }
  deletReport(id:Number){
    return this.httpClient.delete(`${this.reportURL}/deleteReport/${id}`);

  }

percentage(){
  return this.httpClient.get(`${this.reportURL}/reports/chart`);
}

  addReport(report : Report):Observable<any[]>{
    const token = sessionStorage.getItem('Token');
    const headers = { 'Authorization': `Bearer ${token}` };
    return this.httpClient.post<any[]>(`${this.reportURL}/addReport`, report,{ headers: headers })
  }
}
