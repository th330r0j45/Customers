import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/User';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: AuthService) { }

  ngOnInit(): void {
  }
  onLogin(form: User){
  this.api.loginByEmail(form).subscribe(data => {
    console.log(data);
  })
  }
  

}
