import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() LoggedIn: boolean = false;
  firstName: string;
  lastName: string;
  imageurl:string;
  constructor() {
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    this.imageurl=localStorage.getItem('profileImage');
  }

  ngOnInit(): void {}
  logOut() {
    localStorage.clear();
  }
}
