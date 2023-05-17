import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service';
import { User } from '../../../models/User';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  show: boolean = false;
  confirmPassword: any;
  user: User;
  signUpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-z]*$/)]),
    lastName: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-z]*$/)]),
    emailId: new FormControl('',Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/),Validators.minLength(8),Validators.maxLength(15)]),
    userId: new FormControl(''),
    isActive: new FormControl(true),
    profileImage: new FormControl('/assets/profile.webp'),
    id: new FormControl(0),
    dateCreated: new FormControl(new Date()),
  });
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  
  
  addUser() {
    this.confirmPassword = document.getElementById('confirmPassword') as HTMLInputElement;
    if (this.confirmPassword.value == this.signUpForm.value.password) {
          this.userService.addUser(this.signUpForm.getRawValue()).subscribe({
            next:(data)=>{
              this.showSuccess('Signup successfull', 'Please login');
              this.signUpForm.reset();
              this.confirmPassword.value = '';
              this.router.navigateByUrl('/login');
            this.signUpForm.reset();
            this.confirmPassword.value = '';
            },
            error:(err) =>{
              console.log(err);
              if(err.status==500){
                this.showWarning('User already exists');
                this.signUpForm.reset();
              }
            }}  
      );
    }
    else {
     this.showError('Passwords do not match!','Please re-enter the password');
     this.confirmPassword.value = '';
   }
  }

  showSuccess(message: string, submessage: string) {
    this.toastr.success(message, submessage);
  }

  showError(message: string,submessage?: string) {
    this.toastr.error(message,submessage);
  }

  showWarning(message: string) {
    this.toastr.warning(message);
  }
}
