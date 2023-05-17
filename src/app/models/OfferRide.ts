export class BookRide {
  offeredId: 0;
  id: number;
  startingLocation: string;
  endingLocation: string;
  seatsOffered: number;
  availableSeats: number;
  date: Date;
  timeSlot: string;
  isActive: boolean;
  cost: number;
  constructor(
    offeredId: number,
    id: number,
    startingLocation: string,
    endingLocation: string,
    seatsOffered: number,
    availableSeats: number,
    date: Date,
    timeSlot: string,
    isActive: boolean,
    cost: number
  ) {
    this.id = id;
    this.startingLocation = startingLocation;
    this.endingLocation = endingLocation;
    this.seatsOffered = seatsOffered;
    this.availableSeats = availableSeats;
    this.date = date;
    this.timeSlot = timeSlot;
    this.isActive = isActive;
    this.cost = cost;
  }
}
