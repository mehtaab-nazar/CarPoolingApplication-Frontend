import { Component, OnInit } from '@angular/core';
import { RideService } from 'src/app/services/ride.service';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  LoggedIn: boolean = true;
  id;
  offeredRides;
  bookedRides;
  constructor(private userService: UserService) {
    this.id = localStorage.getItem('id');
  }

  ngOnInit(): void {
    this.userService.getBookedRides(this.id).subscribe((data: any) => {
     /* console.log(data);*/
      this.bookedRides = data;
    });
    this.userService.getOfferedRides(this.id).subscribe((data: any) => {
      console.log(data);
      this.offeredRides = data;
    });
  }
}
