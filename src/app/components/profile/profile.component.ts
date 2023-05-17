import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  LoggedIn: boolean = true;
  firstName: string;
  lastName: string;
  emailId: string;
  userId: string;
  date: string;
  imageurl: string;
  constructor() {
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    this.emailId = localStorage.getItem('emailId');
    this.date = localStorage.getItem('dateCreated').slice(0, 10);
    this.userId=localStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.imageurl=localStorage.getItem('profileImage');
  }
}
