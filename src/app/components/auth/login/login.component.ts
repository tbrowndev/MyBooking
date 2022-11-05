import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import LoginForm from 'src/app/common/types/auth/login';
import RegisterForm from 'src/app/common/types/auth/register';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public switchToRegister: boolean = false;

  public loginForm: LoginForm = {
    email: '',
    password: ''
  }
  public registerForm: RegisterForm = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.switchToRegister) {
      this.authService.register(this.registerForm);
    } else {
      this.authService.login(this.loginForm);
    }
  }

  isLoading(): boolean {
    return this.authService.isLoading;
  }

  closeLogin(): void {
    this.router.navigateByUrl("/services");
  }

}
