import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private loggedIn :boolean = false;

  constructor() { }

  isLoggedIn(){
    return this.loggedIn
  }

  logIn(){
    this.loggedIn = true;
  }

  logOut(){
    this.loggedIn = false;
  }
}
