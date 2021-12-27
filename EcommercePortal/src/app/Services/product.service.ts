import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly ApiUrl = 'http://localhost:55404/api/Product';
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.ApiUrl + '/GetAll');
  }
  getProductById(val: any) {
    return this.http.get<any>(this.ApiUrl + '/GetById/' + val);
  }
  getProductByName(val: any) {
    return this.http.get<any>(this.ApiUrl + '/GetByName/' + val);
  }
}
