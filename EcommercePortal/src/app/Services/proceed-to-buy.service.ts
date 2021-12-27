import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProceedToBuyService {
  readonly ApiUrl = 'http://localhost:5277/api/ProceedToBuy';
  userId = localStorage.getItem('id');
  constructor(private http: HttpClient) {}

  getCarts() {
    return this.http.get(this.ApiUrl);
  }
  getCartsById(val: string) {
    return this.http.get(this.ApiUrl + '/' + val);
  }
  addCarts(val: any) {
    return this.http.post(this.ApiUrl, val);
  }

  createWishlist(val: number) {
    let apiurl =
      this.ApiUrl + '/Wishlist?productId=' + val + '&customerId=' + this.userId;
    return this.http.post(apiurl, null);
  }
  UpdateWishlist(val: string) {
    return this.http.put(this.ApiUrl + '/GetWishlist/' + val, null);
  }
  DeletewholeCart(userId) {
    let apiurl = this.ApiUrl + '/DeleteAll/' + userId;
    return this.http.get(apiurl);
  }
  DeleteCartById(val: number) {
    return this.http.delete(this.ApiUrl + '/DeleteCart/' + val);
  }
}
