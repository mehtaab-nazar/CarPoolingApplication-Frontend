import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookRide } from '../models/BookRide';

@Injectable({
  providedIn: 'root',
})
export class RideService {
  private apiURL = 'https://localhost:7168/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private HttpClient: HttpClient) {}
  getRides(ride: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };

    try {
      return this.HttpClient.post<any>(this.apiURL + 'BookedRides/getDetails',JSON.stringify(ride),{ headers: headers });
    } 
    catch {
      return null;
    }

  }
  bookRide(ride: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
 
    try {
      return this.HttpClient.post<any>(this.apiURL + 'BookedRides/',JSON.stringify(ride),{ headers: headers });
    } 
    catch {
      return null;
    }

  }
  offerRide(ride: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };

    try {
      return this.HttpClient.post<any>(
        this.apiURL + 'OfferedRides/',
        JSON.stringify(ride),
        { headers: headers }
      );
    } 
    catch {
      return null;
    }

  }
}
