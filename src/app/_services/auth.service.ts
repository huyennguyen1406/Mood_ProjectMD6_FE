import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegisterForm} from "../_model/register-form";
import {FormGroup} from "@angular/forms";
import {RePasswordForm} from "../_model/repass-form";

const AUTH_API = environment.apiUrl + '/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'sign-in', {
      username,
      password
    }, httpOptions);
  }

  register(register: RegisterForm): Observable<any> {
    return this.http.post(AUTH_API + 'sign-up', register, httpOptions);
  }

  repassword(repassword: RePasswordForm, idUser: number | undefined): Observable<any>{
    console.log(AUTH_API + 're-pass/' + idUser)
    return this.http.put(AUTH_API + 're-pass/' + idUser, repassword, httpOptions);
  }
}
