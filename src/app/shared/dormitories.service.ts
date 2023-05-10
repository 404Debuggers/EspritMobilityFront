import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dormitories } from '../class/dormitories';

@Injectable({
  providedIn: 'root'
})
export class DormitoriesService {
  private listDormURL="http://localhost:8085/api/test/getAllDorm";
  readonly dormURL='http://localhost:8085/api/test';
  private addDorm="http://localhost:8085/api/test/addDorm";
  private getAllUniversities = "http://localhost:8085/api/test/getAllunis";
  private updateDorm = "http://localhost:8085/api/test/UpdateDorm";
  private getDormById = "http://localhost:8085/api/test/getDormById";

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  GetAllDorm():Observable<any[]>{
    const token = sessionStorage.getItem('Token');
    console.info(token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<any[]>(this.listDormURL , {headers})
  }



  GetByIDDorm(id : number):Observable<any>{
    const token = sessionStorage.getItem('Token');
      console.info(token);
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    return this.http.get<any>(`${this.getDormById}/${id}`, {headers})
  }
  deleteDorm(DormitoriesId : any){
    const token = sessionStorage.getItem('Token');
      console.info(token);
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    console.log("DormitoriesId: ",DormitoriesId);
    return  this.http.delete(`${this.dormURL}/deleteDorm/${DormitoriesId}`, {headers});
  }
  AddDorm(dorm : Dormitories,univerId: number):Observable<any[]>{

    const token = sessionStorage.getItem('Token');
      console.info(token);
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    return this.http.post<any[]>(`${this.addDorm}/${univerId}`,dorm,{headers});

  }
  updateDormroom(dorm : Dormitories):Observable<any>{
    const token = sessionStorage.getItem('Token');
      console.info(token);
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    const id = dorm.dormitoriesId;
    return this.http.put<any>(`${this.updateDorm}/${id}`,dorm , {headers});
    }
    GetAllUniversities():Observable<any[]>{
      const token = sessionStorage.getItem('Token');
      console.info(token);
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
      return this.http.get<any[]>(this.getAllUniversities , {headers})
    }

}
