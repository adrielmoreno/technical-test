import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/iuser.model';
import { IUsers } from 'src/app/models/iusers.model';

import { AuthService } from 'src/app/services/auth.service';
import { CrudApiService } from 'src/app/services/crud-api.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  private susb!: Subscription;
  userList!: IUser[];
  constructor(private apiCrud: CrudApiService) {

  }

  ngOnInit(): void {
   this.susb= this.apiCrud.getUsers().subscribe((res) => {
      this.userList = res.items;
    })
  }

  onDelete(id: string){
    this.susb = this.apiCrud.deleteUser(id)
    .subscribe((res) => {
     this.ngOnInit();
    })
  }
}
