import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/models/User';
import { Response } from 'src/models/Response';
import { UsersService } from './users.service';
import {Observable} from 'rxjs';
import { LoginComponent } from '../auth/login/login.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'http://localhost:3000/api/users/';

  constructor(private http: HttpClient){}
  loginByEmail(form: User): Observable<Response>{
  let direccion = this.url+"";

  return this.http.post<Response>(direccion, form);
  }
  }





