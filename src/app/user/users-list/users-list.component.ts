import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUsers } from 'src/app/models/iusers.model';

import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']

})
export class UsersListComponent implements OnInit {

  private susb!: Subscription;
  userList!: IUsers;
  constructor(private authServices: AuthService) {



  }

  ngOnInit(): void {
   this.susb= this.authServices.getUsers().subscribe((res) => {
      this.userList = res;
      console.log(this.userList)

    })
  }


}
