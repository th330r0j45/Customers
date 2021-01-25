import { Component, HostBinding, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @HostBinding('class') clases = 'row';

   user: User = {
    id:'',
    name:'',
    phone: '',
    email: '',
    created_at: new Date()
  };
  edit: boolean = false;
  constructor(private userService: UsersService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
    this.userService.getUser(params.id)
    .subscribe(
    res =>{
      console.log(res);
      this.user = res;
      this.edit = true;
    },
    err=> console.error(err)
    )
  }
  }
  saveNewUser() {
    delete this.user.created_at;
    this.userService.saveUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/users']);
        },
        err => console.error(err)
      )
  }

  updateUser() {
    delete this.user.created_at;
    this.userService.updateUser(this.user.id, this.user)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/users']);
        },
        err => console.error(err)
      )
  }

}
