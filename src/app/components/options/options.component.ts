import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
})
export class OptionsComponent implements OnInit {
  LoggedIn: boolean = true;
  firstName: string;
  constructor() {
    this.firstName = localStorage.getItem('firstName');
  }

  ngOnInit(): void {}
}
