
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private shopData = new BehaviorSubject<any[]>([]); // To store and share data across components

  constructor(private http: HttpClient) { }

  // Fetch data from the API and store it
  fetchData(apiUrl: string): void {
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.shopData.next(data); // Update the BehaviorSubject with new data
      },
      (error) => {
        console.error('Error fetching shop data:', error);
      }
    );
  }

  // Retrieve the latest shop data
  getData(): Observable<any[]> {
    return this.shopData.asObservable();
  }
}
