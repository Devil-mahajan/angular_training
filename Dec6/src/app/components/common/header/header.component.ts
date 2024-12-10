import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name : string = 'Login';
username: any;


constructor(private route:ActivatedRoute) {}


ngOnInit(): void {
this.route.queryParams.subscribe(params => {
this.username = params['username'] || null;
console.log('Username:', this.username);
 });


const userData = JSON.parse(localStorage.getItem("userdata") || "");
console.log(userData);
this.username = userData.username
 }

}
