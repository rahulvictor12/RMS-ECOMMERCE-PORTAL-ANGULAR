import { Component, OnInit,Input } from '@angular/core';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent implements OnInit {

  constructor(private service:VendorService) { }

  @Input() vendor:any;
  name!: string;
  deliveryCharge!: number;
  rating!:number;
  ngOnInit(): void {
    this.name=this.vendor.name;
    this.deliveryCharge=this.vendor.deliveryCharge;
    this.rating=this.vendor.rating;
  }
  createVendor(){
    var val={name:this.name,deliveryCharge:this.deliveryCharge,rating:this.rating}
    this.service.createVendor(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
