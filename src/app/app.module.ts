import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { SearchComponent } from './page/search/search.component';
import { UpdateprofileComponent } from './page/updateprofile/updateprofile.component';
import { NewpasswordComponent } from './page/newpassword/newpassword.component';
import { CartComponent } from './page/cart/cart.component';
import { OrderComponent } from './page/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    UpdateprofileComponent,
    NewpasswordComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
