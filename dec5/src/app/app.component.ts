import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `.body{
      display:none
    }`
  ]
})
export class AppComponent {

  currentUserDetails: any = {};
  currentPages: any = 'telephsic'

  pageHasBeenChanged(page: string) {
    this.currentPages = page;
  }

  loginData(user: any) {
    this.currentUserDetails = user;
  }
}
