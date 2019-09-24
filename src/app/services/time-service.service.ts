import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private httpClient: HttpClient) { }

  getTime():any {
    return this.httpClient.get('http://worldtimeapi.org/api/timezone/America/Mexico_City');
  }
}
