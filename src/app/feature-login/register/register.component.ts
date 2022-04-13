import { Component, OnInit } from '@angular/core';
import {AuthService} from "../securiy/_services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      phone: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  // tslint:disable-next-line:typedef
  get name(){
    // @ts-ignore
    return this.formRegister.get('name')
  }
  // tslint:disable-next-line:typedef
  get address(){
    // @ts-ignore
    return this.formRegister.get('address')
  }
  // tslint:disable-next-line:typedef
  get phone(){
    // @ts-ignore
    return this.formRegister.get('phone')
  }
  // tslint:disable-next-line:typedef
  get username() {
    // @ts-ignore
    return this.formRegister.get('username');
  }

  // tslint:disable-next-line:typedef
  get email() {
    // @ts-ignore
    return this.formRegister.get('email');
  }

  // tslint:disable-next-line:typedef
  get password() {
    // @ts-ignore
    return this.formRegister.get('password');
  }

  onSubmit(): void {
    const register = {
      name: this.formRegister?.value.name,
      address : this.formRegister?.value.address,
      email: this.formRegister?.value.email,
      phone: this.formRegister?.value.phone,
      username: this.formRegister?.value.username,
      password: this.formRegister?.value.password
    };

    this.authService.register(register).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
