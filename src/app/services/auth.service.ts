import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs';
import { IJwt } from '../models/ijwt.model';
import { IUser } from '../models/iuser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL_AUTH: string = 'http://51.38.51.187:5050/api/v1/';
  // authSubject = new BehaviorSubject(false);
  private token: string | null = null
  isLogin: boolean = false;
  constructor(private httpClient: HttpClient) { }

  signUp(user: IUser): Observable<any> {
    return this.httpClient.post<any>(`${this.URL_AUTH}auth/sign-up`, user).pipe(tap(
      (res: any) => {
        if (!res) {
          this.logIn(user);
        }
      }
    ))
  }

  logIn(user: IUser): Observable<IJwt> {
    return this.httpClient.post<IJwt>(`${this.URL_AUTH}auth/log-in`, user).pipe(tap(
      (res: IJwt) => {
        if (res) {
          this.saveToken(res.accessToken, res.refreshToken, res.tokenType)
        }
      }
      ))
  }

  logOut(): void {
    this.token = '';
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("tokenType");
  }

  private saveToken(token: string, refreshToken: string, tokenType: string) {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("tokenType", tokenType);
    this.token = token;
  }

   getToken(): string | null {
    if(!this.token){
      this.token = localStorage.getItem("accessToken") ?? null;
    }
    return this.token;
  }

}
