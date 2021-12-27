import { Component, OnInit } from '@angular/core';
import { ProceedToBuyService } from 'src/app/Services/proceed-to-buy.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  Wishlist: any = [];
  displayedColumns: string[] = ['id', 'Name'];
  ProductList: any = [];
  userId = localStorage.getItem('id');
  constructor(
    public cartservicie: ProceedToBuyService,
    public prodservice: ProductService
  ) {}

  ngOnInit(): void {
    this.showWishlit();
  }

  showWishlit() {
    this.cartservicie.UpdateWishlist(this.userId).subscribe((data) => {
      console.warn('result', data);
      this.Wishlist = data;
    });
  }
  showProductNameWishlist() {
    this.prodservice.getAllProducts().subscribe((data) => {
      this.ProductList = data;
    });
  }
}
