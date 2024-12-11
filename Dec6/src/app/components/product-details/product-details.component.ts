
import { ShopService } from './../shop.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any = null;
  productId: string | null = null;

  constructor(private shopService: ShopService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id'); // Get the product ID from the route

    if (this.productId) {
      // Subscribe to shop data and find the product
      this.shopService.getData().subscribe((data) => {
        if (data.length) {
          this.productDetails = data.find(product => product.id === Number(this.productId)) || null;
          console.log('Matched Product Details:', this.productDetails);
        }
      });
    }
  }
}









