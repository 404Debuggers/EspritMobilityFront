import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  
  readonly API_URL = 'http://localhost:8085/api/test';

  constructor(private httpClient: HttpClient) { }

  getAllunis() {
    return this.httpClient.get(`${this.API_URL}/getAllunis`)
  }

  addUni(university : any) {
    return this.httpClient.post(`${this.API_URL}/add_Uni`, university)
  }

  suppUni(universiteId : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-uni/${universiteId}`)
  }

  editUni(university : any){
    return this.httpClient.put(`${this.API_URL}/update_Uni`, university)
  
}


}
