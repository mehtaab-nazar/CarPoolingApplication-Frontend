import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service';
import { User } from '../../../models/User';
import { ToastrService } from 'ngx-toastr';
import { UserLogin } from 'src/app/models/UserLogin';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User;
  show: boolean = false;
  alert: boolean = false;
  loginForm = new FormGroup({
    emailId: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.userService.getUsers().subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}
  showPassword() {
    this.show = !this.show;
  }
  login(){
    this.userService.login(this.loginForm.value).subscribe({
      next:(data) =>{
        localStorage.setItem("token",data.jwtToken);
        this.getUserById(this.loginForm.value);
      },
    error:(err) =>{
console.log(err.status);
if(err.status==500){
  this.showError('User doesnt exist');
  }
  else if(err.status==400){
    this.showError('Please enter correct password!');
    this.loginForm.get('password').reset();
  }
}});
  }
  getUserById(details:any) {
    this.userService.getUserById(details.emailId).subscribe((data: any) => {
      console.log(data);
      if (data == null) {
        this.showError('User doesnt exist');
      } else {
        if (data.password == details.password && data.emailId == details.emailId) {
          this.router.navigate(['/options']);
          localStorage.setItem('id', JSON.parse(JSON.stringify(data.id)));
          localStorage.setItem(
            'emailId',
            JSON.parse(JSON.stringify(data.emailId))
          );
          localStorage.setItem(
            'password',
            JSON.parse(JSON.stringify(data.password))
          );
          localStorage.setItem(
            'firstName',
            JSON.parse(JSON.stringify(data.firstName))
          );
          localStorage.setItem(
            'lastName',
            JSON.parse(JSON.stringify(data.lastName))
          );
          localStorage.setItem(
            'userId',
            JSON.parse(JSON.stringify(data.userId))
          );
          localStorage.setItem(
            'dateCreated',
            JSON.parse(JSON.stringify(data.dateCreated))
          );
          localStorage.setItem(
            'profileImage',
            JSON.parse(JSON.stringify(data.profileImage))
          );
          localStorage.setItem(
            'isActive',
            JSON.parse(JSON.stringify(data.isActive))
          );
        } else {
          this.showError('Enter correct password');
        }
      }
    });
    this.loginForm.reset();
  }
  removeUser(id: number) {
    this.userService.removeUser(id).subscribe((data: any) => {
      console.log(data);
    });
  }
  showError(message: string) {
    this.toastr.error(message);
  }
}
