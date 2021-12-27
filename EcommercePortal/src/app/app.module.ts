import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Components/product/product.component';
import { VendorComponent } from './Components/vendor/vendor.component';
import { ProductService } from './Services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorService } from './Services/vendor.service';
import { LoginComponent } from './Components/user/login/login.component';
import { UserComponent } from './Components/user/user.component';
import { CartComponent } from './Components/cart/cart.component';
import { AddvendorComponent } from './Components/vendor/addvendor/addvendor.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { AddtocartComponent } from './Components/addtocart/addtocart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    VendorComponent,
    LoginComponent,
    UserComponent,
    CartComponent,
    AddvendorComponent,
    WishlistComponent,
    AddtocartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatDividerModule,
  ],
  providers: [ProductService, VendorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
