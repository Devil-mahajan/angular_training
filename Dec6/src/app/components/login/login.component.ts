import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  currentTab: any = 'login';
  userObject: any = [];
  @Output() loginDetails = new EventEmitter<any>();

  changeTab(arg0: string) {
    this.currentTab = arg0;
  }

  pushValuesInObject(user: any) {

    if (this.currentTab == 'signup') {
      this.userObject.push(user);
      console.log("userobj", this.userObject);
    } else {
      const { email, password } = user;
      const matched = this.userObject.find((usr:any) => usr.email == email && usr.password == password);
      if(matched) {
        this.loginDetails.emit(matched)
      } else {
        alert("invalid credentials")
      }
    }

}
}
