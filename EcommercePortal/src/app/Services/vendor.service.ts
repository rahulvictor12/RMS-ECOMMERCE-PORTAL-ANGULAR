import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VendorService {
  readonly ApiUrl='http://localhost:8420/api/Vendor';
  constructor(private http:HttpClient) { }
  
  getAllVendors(){
    return this.http.get(this.ApiUrl);
  }
  getVendorId(id:any){
   return this.http.get(this.ApiUrl+'/',id);
  }
  createVendor(val:any)
  {
    return this.http.post(this.ApiUrl,val);
  }
}
