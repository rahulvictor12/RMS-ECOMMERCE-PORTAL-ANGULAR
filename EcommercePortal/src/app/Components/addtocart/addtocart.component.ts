import { Component, OnInit,Input } from '@angular/core';
import { ProceedToBuyService } from 'src/app/Services/proceed-to-buy.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  constructor(private service:ProceedToBuyService) { }
  @Input() cart:any;
  customerId!: number;
  productId!: number;
  quantity!:number;
  zipcode!:number;
  deliveryDate!:Date;
  vendorId!:number;
  ngOnInit(): void {
    this.customerId=this.cart.customerId;
    this.productId=this.cart.productId;
    this.quantity=this.cart.quantity;
    this.zipcode=this.cart.zipcode;
    this.deliveryDate=this.cart.deliveryDate;
    this.vendorId=this.cart.vendorId;
  }

  createCart()
  {
    var val={customerId:this.customerId,productId:this.productId,quantity:this.quantity,zipcode:this.zipcode,deliveryDate:this.deliveryDate}
    this.service.addCarts(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
