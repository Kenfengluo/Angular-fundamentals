import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [
    `
    em { float:right; color: #E05C65; padding-left:10px;}
    `
  ]
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseoverlogin;
  constructor(private authService: AuthService, private router: Router) {

  }
  ngOnInit() {

  }
  login(value) {
    this.authService.loginuser(value.userName, value.password);
    this.router.navigate(['/events']);
  }
  cancel() {
    this.router.navigate(['/events']);
  }
}
