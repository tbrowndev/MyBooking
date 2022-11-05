import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import LoginForm from 'src/app/common/types/auth/login';
import RegisterForm from 'src/app/common/types/auth/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router) { }

  private sleep(ms: number) {
    return new Promise( (resolve) => setTimeout(resolve, ms));
  }

  async login(form: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    /* Authenticate User */
    await this.sleep(5000);
    this.isAuthenticated = true;
    /* End Authenticate User */

    this.router.navigateByUrl("/services")
    this.isLoading = false
  }

  async register(form: RegisterForm) {
    if (this.isLoading) return;
    this.isLoading = true;

    /* Create User User */
    await this.sleep(5000);
    this.isAuthenticated = true;
    /* End Create User */

    this.router.navigateByUrl("/services")
    this.isLoading = false
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigateByUrl("/login")
  }

}
