import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidacy } from '../class/candidacy';
import { Observable } from 'rxjs';
import { Interview } from '../class/interview';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  readonly API_URL = 'http://localhost:8085/api/test';

  constructor(private httpClient: HttpClient) { }

  affichertoutEvent() {
    return this.httpClient.get(`${this.API_URL}/affichertoutEvent`)
  }
}
