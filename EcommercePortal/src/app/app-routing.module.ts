import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './auth/authorization.guard';
import { CartComponent } from './Components/cart/cart.component';
import { ProductComponent } from './Components/product/product.component';
import { LoginComponent } from './Components/user/login/login.component';
import { UserComponent } from './Components/user/user.component';
import { VendorComponent } from './Components/vendor/vendor.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
const routes: Routes = [
  {
    path: 'Product',
    component: ProductComponent,
    canActivate: [AuthorizationGuard],
  },
  {
    path: 'Vendor',
    component: VendorComponent,
    canActivate: [AuthorizationGuard],
  },
  {
    path: 'Wishlist',
    component: WishlistComponent,
    canActivate: [AuthorizationGuard],
  },
  { path: 'Cart', component: CartComponent, canActivate: [AuthorizationGuard] },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
