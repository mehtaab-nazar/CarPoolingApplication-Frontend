import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RideService } from 'src/app/services/ride.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-book-offer-ride',
  templateUrl: './book-offer-ride.component.html',
  styleUrls: ['./book-offer-ride.component.css'],
})
export class BookOfferRideComponent implements OnInit {
  offerRide = false;
  next: boolean = false;
  LoggedIn: boolean = true;
  timeSlot: string;
  matches: boolean = true;
  DatePipe: DatePipe = new DatePipe('en-US');
  offeredRides;
  todayDate=this.DatePipe.transform(new Date(), 'yyyy-MM-dd');
  offerRideForm = this.FormBuilder.group({
    offeredId: 0,
    id: localStorage.getItem('id'),
    startingLocation: ['',[Validators.required,Validators.pattern(/^[a-zA-z]*$/)]],
    endingLocation: ['',[Validators.required,Validators.pattern(/^[a-zA-z]*$/)]],
    date: ['',Validators.required],
    timeSlot: ['',Validators.required],
    stops: this.FormBuilder.array(['']),
    availableSeats: [0,Validators.required],
    cost: [0,[Validators.required,Validators.min(1)]],
    isActive: true,
  });
  bookRideForm = this.FormBuilder.group({
    bookingId: 0,
    offeredId: 0,
    id: localStorage.getItem('id'),
    startingLocation: ['',[Validators.required,Validators.pattern(/^[a-zA-z]*$/)]],
    endingLocation: ['',[Validators.required,Validators.pattern(/^[a-zA-z]*$/)]],
    date: ['',Validators.required],
    timeSlot: '',
    bookedSeats: [0,[Validators.required,Validators.min(1)]],
    seatsLeft: 0,
    isActive: true,
    cost:0
  });
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private rideService: RideService,
    private FormBuilder: FormBuilder,
    private toastr: ToastrService
    ) {
    this.offerRide = this.route.snapshot.data['offerRide'];
  }
  ngOnInit(): void {}
  get stops(): FormArray {
    return this.offerRideForm.controls['stops'] as FormArray;
  }
  addStop() {
    this.stops.push(this.FormBuilder.control('',Validators.pattern(/^[a-zA-z]*$/)));
  }
  removeStop(index: number) {
    this.stops.removeAt(index);
  }
  submitOfferRide() {
    console.log(this.offerRideForm.value);
    this.rideService
      .offerRide(this.offerRideForm.value)
      .subscribe((data: any) => {
        console.log(data);
        this.showSuccess('Ride offered succesfully!');
        this.router.navigateByUrl("/options");
      });
  }
  submitBookedRide() {
    this.bookRideForm.value.timeSlot = this.timeSlot;
    this.bookRideForm.value.date=new DatePipe('en-US').transform(this.bookRideForm.value.date, 'yyyy-MM-dd')
    console.log(this.bookRideForm.value);
    this.rideService
      .getRides(this.bookRideForm.value)
      .subscribe((data: any) => {
        console.log(data.length);
        this.offeredRides = data;
        if (this.offeredRides.length != 0) {
          this.matches = false;
        } else {
          this.showError('No Matching Rides');
        }
      });
  }
  showError(message: string) {
    this.toastr.error(message);
  }

  showSuccess(message: string) {
    this.toastr.success(message);
  }
}
