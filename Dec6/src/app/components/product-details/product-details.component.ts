
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
  loading: boolean = true; // To show loading state

  constructor(private shopService: ShopService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id'); // Get the product ID from the route

    if (this.productId) {
      const apiUrl = 'https://fakestoreapi.com/products';
      this.shopService.fetchProductById(apiUrl, this.productId).subscribe(
        (data) => {
          this.productDetails = data; // Store the product details
          this.loading = false; // Stop the loading spinner
          console.log('Fetched Product Details:', this.productDetails);
        },
        (error) => {
          console.error('Error fetching product details:', error);
          this.loading = false; // Stop loading on error
        }
      );
    }
  }
}




// Subscribe to shop data and find the product
// this.shopService.getData().subscribe((data) => {
//         if (data.length) {
//           this.productDetails = data.find(product => product.id === Number(this.productId)) || null;
//           console.log('Matched Product Details:', this.productDetails);
//         }
//       });
//     }
//   }
// }









