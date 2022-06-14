import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/iuser.model';
import { IUsers } from '../models/iusers.model';

@Injectable({
  providedIn: 'root'
})
export class CrudApiService {
  URL_AUTH: string = 'http://51.38.51.187:5050/api/v1/';
  constructor(private httpClient: HttpClient) { }


  getUsers():Observable<IUsers> {
    return this.httpClient.get<IUsers>(`${this.URL_AUTH}users`, { headers: { 'Authorization': `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}` } })
  }
  getUser(id: string):Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.URL_AUTH}users/${id}`, { headers: { 'Authorization': `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}` } })
  }

  updateUser(id: string, user: IUser):Observable<any> {
    return this.httpClient.put<IUser>(`${this.URL_AUTH}users/${id}`, user ,{ headers: { 'Authorization': `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}` } })
  }

  deleteUser(id: string):Observable<any> {
    return this.httpClient.delete<IUser>(`${this.URL_AUTH}users/${id}`, { headers: { 'Authorization': `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}` } })
  }
}
