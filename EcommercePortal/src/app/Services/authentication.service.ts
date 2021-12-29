import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  readonly ApiUrl =
    'https://retailmanagementsystemapp.azurewebsites.net/api/Auth';
  constructor(private http: HttpClient) {}
  authenticationUser(formData: any) {
    return this.http.post(this.ApiUrl, formData);
  }
  registration(val: any) {
    return this.http.post(this.ApiUrl + '/Register', val);
  }
}
