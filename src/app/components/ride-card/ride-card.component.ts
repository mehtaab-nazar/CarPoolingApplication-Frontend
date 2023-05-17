import { Component, Input, OnInit } from '@angular/core';
import { RideService } from 'src/app/services/ride.service';
import { UserService } from 'src/app/services/user-service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ride-card',
  templateUrl: './ride-card.component.html',
  styleUrls: ['./ride-card.component.css'],
})
export class RideCardComponent implements OnInit {
  @Input() ride;
  @Input() bookedRide;
  @Input() isConfirm: boolean=false;
  @Input() isDashboard:boolean=false;
  @Input() isBookedRide:boolean;
  name: string;
  constructor(
    private userService: UserService,
    private rideService: RideService,
    private toastr: ToastrService,
    private router:Router,
  ) {
    this.isDashboard=this.isConfirm;
  }

  ngOnInit(): void {
    console.log(this.ride.id);
    this.userService.getUserById(this.ride.id).subscribe((data: any) => {
      console.log(data);
      this.name = data.firstName +" "+ data.lastName;
    });
    
  }
  confirmFunction(isDashboard:boolean){
    if(isDashboard==false){
      this.isConfirm=!this.isConfirm;
    }
  }
  addRide() {
    this.bookedRide.offeredId = this.ride.offeredId;
    this.bookedRide.cost=this.ride.cost*this.bookedRide.bookedSeats;
    console.log(this.bookedRide.cost);
    this.rideService.bookRide(this.bookedRide).subscribe((data: any) => {
      console.log(data);
    });
    this.showSuccess('Ride Booked!');
    this.router.navigateByUrl("/options");
  }
  showSuccess(message: string) {
    this.toastr.success(message);
  }
}
