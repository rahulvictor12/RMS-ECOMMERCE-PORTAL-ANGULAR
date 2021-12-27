import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProceedToBuyService } from 'src/app/Services/proceed-to-buy.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private service: ProductService,
    public cartservicie: ProceedToBuyService
  ) {}
  displayedColumns: string[] = [
    'Name',
    'Price',
    'Description',
    'Rating',
    'Action',
  ];
  ProductList: any = [];
  searchType: string = 'name';
  searchValue: string;
  userId = localStorage.getItem('id');
  userName = localStorage.getItem('username');
  Address = localStorage.getItem('address');
  ModalTitle!: string;
  ActivateaddCartComp!: boolean;
  cart: any = {
    customerId: 0,
    productId: 0,
    quantity: 0,
    zipcode: 0,
    deliveryDate: new Date(),
  };
  @Input() searchvalue: string | undefined;

  ngOnInit(): void {
    this.refreshProductList();
  }
  addClick() {
    this.ModalTitle = 'Add to Cart';
    this.ActivateaddCartComp = true;
  }
  addtoCart(productid: number) {
    this.cart.productId = productid;
    this.cart.customerId = this.userId;
    this.ActivateaddCartComp = true;
  }

  onSubmit(form: NgForm) {
    this.service.getProductById(form.value).subscribe((data: any) => {
      this.ProductList = data;
    });
  }
  refreshProductList() {
    this.service.getAllProducts().subscribe((data) => {
      this.ProductList = data;
    });
  }

  SearchProduct() {
    if (this.searchType == 'id')
      this.service.getProductById(this.searchValue).subscribe((data) => {
        this.ProductList = data;
      });
    else
      this.service.getProductByName(this.searchValue).subscribe((data) => {
        this.ProductList = data;
      });
  }
}
