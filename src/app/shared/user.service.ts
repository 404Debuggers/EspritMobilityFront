import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AuthLoginInfo} from "../auth/login-info";
import {Observable} from "rxjs";
import {User} from "../class/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly PATH_OF_API = "http://localhost:8085/api";

  requestHeader = new HttpHeaders(
    {
      "No-Auth": "True"

    }
  );
  constructor(private httpclient: HttpClient) { }



  login(user: AuthLoginInfo): Observable<any> {
    console.info(user);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpclient.post<AuthLoginInfo>(this.PATH_OF_API + "/auth/signin", user, {headers: headers});
  }

  getAllUsers(){
    return this.httpclient.get<User[]>(`${this.PATH_OF_API}/test/getAllUsers`)
  }
  register(user:any) : Observable<any>{
    return this.httpclient.post(`${this.PATH_OF_API}/auth/signup`,user)
  }
  // updateUser(user:any){
  //   return this.httpclient.put(`${this.PATH_OF_API}/api/test/users/`)
  // }

  deleteUser(userId: any): Observable<any>{
      return this.httpclient.delete(`${this.PATH_OF_API}/test/users/${userId}` )

  }

  updateUser( updatedUser: User): Observable<any> {
    const userId = updatedUser.user_Id;
    return this.httpclient.put(`${this.PATH_OF_API}/test/users/${userId}`, updatedUser);
  }

  getUserFromToken(accessToken: string): Observable<any> {


    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    return this.httpclient.get(`${this.PATH_OF_API}/test/currentUser`, { headers });
  }

  forgetPassword(email:string){
    const params = new HttpParams().set('email', email);
    return this.httpclient.get<String>(`${this.PATH_OF_API}/auth/password-reset-request`,{params});
  }
}
