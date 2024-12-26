import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "http://103.127.29.85:4000/ndhs-master/governance-stats/1/14/2021"

  constructor(private http: HttpClient) { }

  sendData(): Observable<any> {
    return this.http.get(this.apiUrl)
  }
}
