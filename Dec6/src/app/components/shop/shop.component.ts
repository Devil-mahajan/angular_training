import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shops: any[] = [];
  displayedShops: any[] = [];
  isVisible: boolean = false;

  constructor(private nevigateShop: ShopService) { }
  ngOnInit(): void {
    // Fetch products from the API using the service
    this.nevigateShop.getProducts().subscribe(
      (data) => {
        this.shops = data;  // stores all products in the shops array,
        this.displayedShops = this.shops.slice(0, 10)
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  toogleViewAll(): void {
    if (this.isVisible) {
      this.displayedShops = this.shops.slice(0, 10);
    } else {
      this.displayedShops = [...this.shops];
    }
    this.isVisible = !this.isVisible



  }



}
