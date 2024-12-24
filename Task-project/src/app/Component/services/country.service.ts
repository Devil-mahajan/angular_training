
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City, Country, State } from 'country-state-city';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  apiUrl: string = environment.apiUrl
  countries: any;
  public userSubject = new Subject<any>();
  public behaviorSubject = new BehaviorSubject<string>('Initial Vlue')

  constructor(private http: HttpClient) {

  }

  sendRequest(type: any, payload: any, endpoint: any) {
    this.apiUrl = this.apiUrl + endpoint;

    switch (type) {
      case 'get':
        return this.http.get(this.apiUrl, payload)

      case 'post':
        return this.http.post(this.apiUrl, payload)

      case 'delete':
        return this.http.delete(this.apiUrl, payload)

      default:
        return this.http.get(this.apiUrl, payload)
    }
  }
  getAllCountries() {
    this.countries = Country.getAllCountries()
    return this.countries

  }

  getStatesOfCountry(countrycode: string) {
    return State.getStatesOfCountry(countrycode)

  }

  getAllCity() {
    return City.getAllCities()
  }


}

