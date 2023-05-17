import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookOfferRideComponent } from '../book-offer-ride.component';
import { FormsModule,FormBuilder,FormArray,FormControl,FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {
  timeSlot:string;
  seatsRequired:number;
  bookRide:boolean=true;
@Input() nextForm:boolean=true;
@Output() rideDetails=new EventEmitter<any>;
rideForm=this.FormBuilder.group({
  offeredId:0,
  id:localStorage.getItem('id'),
  startingLocation:'',
  endingLocation:'',
  date:'',
  timeSlot:'',
  stops:this.FormBuilder.array(['']),
  availableSeats:0,
  cost:'',
})
  constructor(private FormBuilder:FormBuilder) {

  }
  ngOnInit(): void {

  }
}
