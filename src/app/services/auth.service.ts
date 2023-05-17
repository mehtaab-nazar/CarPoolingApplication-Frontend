import { Injectable } from '@angular/core';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  public isAuthenticated(): boolean {
    const jwtHelper = new JwtHelperService;
     var jwt = localStorage.getItem("token");
     if (jwtHelper.isTokenExpired(jwt)) 
     {
        return false;
     }
       return true;
  }
}
