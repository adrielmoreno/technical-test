import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UserComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    AuthService
  ]
})
export class UserModule { }
