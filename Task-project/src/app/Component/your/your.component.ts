import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-your',
  templateUrl: './your.component.html',
  
  styleUrls: ['./your.component.css']
})
export class YourComponent implements OnInit {
  query:string | null = '';
  page:number | null = 0;

  constructor(private route : ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((param )=> {
      this.query = param ['q'];
      this.page = param ['page']
    });
  }

}
