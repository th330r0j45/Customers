import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


API_URI = 'http://localhost:3000/api/users/';
  constructor(private http: HttpClient) {

   }
   getUsers(){
     return this.http.get(`${this.API_URI}`);
   }
   getUser(id: string){
    return this.http.get(`${this.API_URI}${id}`);
  }
  deleteUser(id: string){
    return this.http.delete(`${this.API_URI}${id}`);
  }
  saveUser(user: User){
    return this.http.post(`${this.API_URI}`, user);
  }
  updateUser(id, updateUser){
    return this.http.put(`${this.API_URI}${id}`, updateUser);
  }

}
