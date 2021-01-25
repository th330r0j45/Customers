import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserFormComponent } from '../components/user-form/user-form.component';
import { promise } from 'protractor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
