import { Component, NgModule, OnInit } from '@angular/core';
import { VendorService } from 'src/app/Services/vendor.service';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  constructor(private service:VendorService) { }
  VendorList:any=[];
  ModalTitle!: string;
  ActivateaddvendorComp!:boolean;
  vendor:any;

  ngOnInit(): void {
    this.DisplayVendorList();
  }
  addClick()
  {
this.vendor={
  id:0,
  name:"",
  deliveryCharge:0,
  rating:0
}
this.ModalTitle="Add Vendor";
this.ActivateaddvendorComp=true;
  }
  closeClick()
  {
this.ActivateaddvendorComp=false;
this.DisplayVendorList();
  }
  DisplayVendorList()
  {
    this.service.getAllVendors().subscribe(data=>{
   console.warn("result",data);
   
      this.VendorList=data
    });
  }
}
