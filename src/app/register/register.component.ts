import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_services/auth.service";
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
  get name(){
    // @ts-ignore
    return this.formRegister.get('name')
  }
  get address(){
    // @ts-ignore
    return this.formRegister.get('address')
  }
  get phone(){
    // @ts-ignore
    return this.formRegister.get('phone')
  }
  get username() {
    // @ts-ignore
    return this.formRegister.get('username');
  }

  get email() {
    // @ts-ignore
    return this.formRegister.get('email');
  }

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
