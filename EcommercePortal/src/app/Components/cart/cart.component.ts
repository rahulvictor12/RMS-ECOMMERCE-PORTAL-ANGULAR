import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProceedToBuyService } from 'src/app/Services/proceed-to-buy.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  CartList: any = [];
  userId = localStorage.getItem('id');
  constructor(
    public service: ProceedToBuyService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.refreshCartList();
  }

  refreshCartList() {
    this.service.getCartsById(this.userId).subscribe((data) => {
      this.CartList = data;
    });
  }
  deleteCart(userId) {
    this.service.DeletewholeCart(userId).subscribe((data) => {
      console.log(data);
      this.refreshCartList();
    });
  }
  DeletecartbyId(val: number) {
    this.service.DeleteCartById(val).subscribe((data) => {
      console.log(data);
      this._snackBar.open('Item Deleted Succesfully', 'ok', { duration: 3000 });
      this.refreshCartList();
    });
  }
}
