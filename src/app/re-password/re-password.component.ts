import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../_services/auth.service";
import {ConfirmedValidator} from "./confirmed.validators";
import {TokenStorageService} from "../_services/token-storage.service";


@Component({
  selector: 'app-re-password',
  templateUrl: './re-password.component.html',
  styleUrls: ['./re-password.component.css']
})
export class RePasswordComponent implements OnInit {
  formRepassed! : FormGroup
  isSuccessful =  false;
  isRepassedFailed = true;
  errorMessage = '';

  idUser?: number;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private tokenStorage : TokenStorageService) { }

  ngOnInit(): void {
    this.formRepassed = this.fb.group({
      currentPassword : ['', [Validators.required, Validators.minLength(6)]],
      newPassword : ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: ConfirmedValidator('newPassword', 'confirmPassword')
    });

    if(this.tokenStorage.getToken()){
      this.idUser = this.tokenStorage.getUser().id;
      console.log(this.idUser)
    }
  }
  get currentPassword(){
    // @ts-ignore
    return this.formRepassed.get('currentPassword')
  }
  get newPassword(){
    // @ts-ignore
    return this.formRepassed.get('newPassword')
  }
  get confirmPassword(){
    // @ts-ignore
    return this.formRepassed.get('confirmPassword')
  }
  get f(){
    return this.formRepassed.controls;
  }

  onSubmit(){
    const repass = {
      currentPassword: this.formRepassed?.value.currentPassword,
      newPassword : this.formRepassed?.value.newPassword,
      confirmPassword: this.formRepassed?.value.confirmPassword
    };
    this.authService.repassword(repass, this.idUser).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true
        this.isRepassedFailed = false;
      }
    )
    console.log(repass);
    console.log(this.idUser);
  }

}
