import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutGuardGuard } from './guards/aut-guard.guard';
import { UsersListComponent } from './user/users-list/users-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'users', component: UsersListComponent , canActivate: [AutGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
