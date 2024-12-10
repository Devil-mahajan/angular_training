import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoginFormVisible: boolean = false;
  userData: any = []
  @ViewChild('username') username: any;
  @ViewChild('email') email: any;
  @ViewChild('password') password: any;
  @ViewChild('logemail') logemail: any;
  @ViewChild('logpass') logpass: any;


  @Output() nameChange = new EventEmitter<string>();


  constructor(private router: Router) {
    console.log("login");


  }


  pushValuesInObject(user: any) {
    this.isLoginFormVisible = true;
    this.userData.push(user)
  }


  logValues(user: any) {
    const matched = this.userData.find((usr: any) => usr.email == user.logemail && usr.password == user.logpass);
    if (matched) {
      localStorage.setItem("token", "tesing");
      localStorage.setItem("userdata", JSON.stringify(matched));
      const username = matched.username || user.email;
      this.router.navigate(['/'], { queryParams: { username: username, email: matched.email } });
    } else {
      if (this.logemail) this.logemail.nativeElement.value = '';
      if (this.logpass) this.logpass.nativeElement.value = '';
      alert("Invalid credentials");
    }
  }


  toggleForm(): void {
    this.isLoginFormVisible = !this.isLoginFormVisible;


    if (!this.isLoginFormVisible) {
      this.clearLoginFields();
    }
  }


  clearLoginFields() {
    if (this.username) this.username.nativeElement.value = '';
    if (this.email) this.email.nativeElement.value = '';
    if (this.password) this.password.nativeElement.value = '';
  }
}