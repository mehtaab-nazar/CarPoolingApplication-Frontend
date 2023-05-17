import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  LoggedIn: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
