import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private dataService : DataService){
  }
  get isLoggedIn() : boolean{
    return  this.dataService.isLoggedIn()

  }


  logIn(){
    this.dataService.logIn();
    this.updateLoginStatus();
  }

  logOut(){
    this.dataService.logOut();
    this.updateLoginStatus();
  }

  private updateLoginStatus() {
     this.dataService.isLoggedIn();
  }
  
  


}
