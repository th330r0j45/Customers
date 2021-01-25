import { Component, Host, HostBinding, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service'
import {User} from '../../../models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  constructor(private usersService: UsersService) { }
  users : any = [];

  ngOnInit(): void {
   this.getUsers();
  }
  getUsers(){
    this.usersService.getUsers().subscribe(
      res => {
        this.users = res;
        console.log(this.users);
      }
      ,
      err => console.error(err)
    )
  }
  deleteUser(id:string){
    console.log(id)
    this.usersService.deleteUser(id).subscribe(
      res => {
        console.log(res)
        this.getUsers();
      },
      err => console.error(err)
    )
  }
  

}
