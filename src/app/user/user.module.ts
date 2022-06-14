import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudApiService } from '../services/crud-api.service';
import { HttpClientModule } from '@angular/common/http';
// components
import { UserComponent } from './user/user.component';
import { NavComponent } from '../nav/nav.component';
import { UsersListComponent } from './users-list/users-list.component';
// material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserComponent,
    UsersListComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,

  ],
  providers: [
    CrudApiService
  ]
})
export class UserModule { }
