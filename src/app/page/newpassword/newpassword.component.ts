import { LoginComponent } from './../../authentication/login/login.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrl: './newpassword.component.scss'
})
export class NewpasswordComponent {
  constructor(private router: Router) {}

  LoginComponent() {
    this.router.navigate(['/login']);
  }

}
