export class BookRide {
  bookingId: 0;
  id: number;
  offeredId: number;
  startingLocation: string;
  endingLocation: string;
  bookedSeats: number;
  seatsLeft: number;
  date: Date;
  timeSlot: string;
  isActive: boolean;
  constructor(
    bookingId: number,
    id: number,
    offeredId: number,
    startingLocation: string,
    endingLocation: string,
    bookedSeats: number,
    seatsLeft: number,
    date: Date,
    timeSlot: string,
    isActive: boolean
  ) {
        this.id=id;
        this.offeredId=offeredId;
        this.startingLocation=startingLocation;
        this.endingLocation=endingLocation;
        this.bookedSeats=bookedSeats;
        this.seatsLeft=seatsLeft;
        this.date=date;
        this.timeSlot=timeSlot;
        this.isActive=isActive
  }
}
