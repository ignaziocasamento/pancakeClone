import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginData } from 'src/app/models/loginData';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'psclone-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  submit(f: NgForm) {
    console.log(f.value)
    const loginData = new LoginData(f.value.username, f.value.password);
    this.authenticationService.authenticate(loginData);
    localStorage.setItem('User', JSON.stringify(f.value))
  }

}
