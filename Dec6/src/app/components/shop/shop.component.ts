
import { ShopService } from './../shop.service';
import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shopData: any[] = [];
  displayedShops: any[] = [];

  constructor(private shopService: ShopService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started:', event.url);

        if (event.url === '/') {
          this.displayedShops = this.shopData.slice(0, 8);
        } else if (event.url === '/shop') {
          this.displayedShops = this.shopData;
        }
      }
    });
  }

  ngOnInit(): void {
    const apiUrl = 'https://fakestoreapi.com/products';
    this.shopService.fetchData(apiUrl); // Fetch data from API

    // Subscribe to the shop data observable
    this.shopService.getData().subscribe((data) => {
      this.shopData = data;
      console.log('Fetched Data:', this.shopData);

      // Set displayed shops based on the current route
      if (this.router.url === '/') {
        this.displayedShops = this.shopData.slice(0, 8);
      } else if (this.router.url === '/shop') {
        this.displayedShops = this.shopData;
      }
    });
  }
}
