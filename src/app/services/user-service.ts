import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { UserLogin } from '../models/UserLogin';
import { environment } from 'src/environments/environment';

const HttpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiURL :string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private Httpclient: HttpClient) {
    this.apiURL=environment.api;
}

  getUsers(): Observable<User> 
  {
    return this.Httpclient.get<any>(this.apiURL + 'Users/');
  }

  addUser(User: any): Observable<any> 
  {
    const headers = { 'content-type': 'application/json' };

    console.log(JSON.stringify(User));

    return this.Httpclient.post<User>(
      this.apiURL + 'Users/',
      JSON.stringify(User),
      { headers: headers }
    );
  }

  login(userDetails:any):Observable<any>{
    const headers = { 'content-type': 'application/json' };
    return this.Httpclient.post<UserLogin>(this.apiURL+'Login/',JSON.stringify(userDetails),
    { headers: headers } );
  }
  getUserById(id: string): Observable<any> 
  {
    let headers=new HttpHeaders().set("Authorization",`bearer ${localStorage.getItem("token")}`);
    console.log(headers);
    return this.Httpclient.get<User>(this.apiURL + 'Users/' + id,{headers});
  }

  removeUser(id: number): Observable<any> 
  {
    return this.Httpclient.get<any>(
      this.apiURL + 'Users/' + id + '?' + id + '=' + id,
      this.httpOptions
    );
  }

  getOfferedRides(id: any): Observable<any>
  {
    return this.Httpclient.get<any>(this.apiURL + 'Users/offered/' + id);
  }

  getBookedRides(id: any): Observable<any>
  {
    return this.Httpclient.get<any>(this.apiURL + 'Users/booked/' + id);
  }
}
