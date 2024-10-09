import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { SearchComponent } from './page/search/search.component';
import { NewpasswordComponent } from './page/newpassword/newpassword.component';
import { CartComponent } from './page/cart/cart.component';
import { OrderComponent } from './page/order/order.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: SearchComponent },
  { path: 'newpass', component: NewpasswordComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
