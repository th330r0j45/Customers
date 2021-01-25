import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from 'src/models/User';
import { promise } from 'protractor';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import {isNullOrUndefined} from 'util'




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http:';

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  registerUser(email: string, id: string){
    const url_api = 'http://localhost:3000/api/users/'
    return this.http.post(url_api,{email, id},
      {headers:this.headers}
      )
      .pipe(map(data=>data));
  }
  loginUser(email: string, id: string):Observable<any>{
    const url_api = 'http://localhost:3000/api/users/login?include=user'
    return this.http.post(url_api,{email, id},{headers:this.headers})
    .pipe(map(data=>data));
  }
  setUser(user):void{
  let user_string = JSON.stringify(user);
  localStorage.setItem('currentUser',user_string);
  }
  setToken(token):void{
    localStorage.setItem("accessToken",token)
  }
  
  getToken(token){
    localStorage.getItem("accessToken");
  }
  getCurrentUser(){
    let user_string = localStorage.getItem('currentUser');
    if(!isNullOrUndefined(user_string)){
      let user = JSON.parse(user_string);
      return user;
    }else{
      return null
    }
  }
  logoutUser(){
    let accessToken = localStorage.getItem('accessToken')
    const url_api = 'http://localhost:3000/api/users/logout?access_token=${access_token}'
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.http.post(url_api,{headers:this.headers},);
  }

  }
  
  



