import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  users : any = [];

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      res => {
        this.users = res;
        console.log(this.users);
      }
      ,
      err => console.error(err)
    )
  }

}
