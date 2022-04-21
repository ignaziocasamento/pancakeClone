import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/models/loginData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new LoginData('Ignazio', '12345678');

  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(loginData: LoginData) : boolean {
    if (this.checkCredentials(loginData)) {
      this.isAuthenticated = true;
      alert(`Hi ${this.mockedUser.getUsername()}, you are successfully logged!`);
      this.router.navigate(['nfts/upload']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(loginData: LoginData) : boolean {
    return this.checkUser(loginData.getUsername()) && this.checkPassword(loginData.getPassword());
  }

  private checkUser(username: string) : boolean {
    return username === this.mockedUser.getUsername();
  }

  private checkPassword(password: string) : boolean {
    return password === this.mockedUser.getPassword();
  }
  
}
