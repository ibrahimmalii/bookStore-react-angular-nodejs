import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginUrl = `${environment.baseUrl}/api/auth/login`;
  registerUrl = `${environment.baseUrl}/api/auth/register`;
  OAuthUrl = `${environment.baseUrl}/api/auth/oauthsignup`;

  loggedStatus =new Subject<boolean>();
  constructor(private apiService : ApiService) {
    this.setLoggedStatus(this.isLogged());
  }

  setLoggedStatus(status : boolean){
    this.loggedStatus.next(status);
  };

  getLoggedStatus(){
    return this.loggedStatus.asObservable();
  }

  login(body:any){
    return this.apiService.post(this.loginUrl, body);
  }

  register(body:any){
    return this.apiService.post(this.registerUrl, body);
  }

  isLogged():boolean{
    return localStorage.token ? true : false;
  }

  logout(){
    this.setLoggedStatus(false);
    localStorage.clear();
  }

  isAdmin(){
    const user = JSON.parse(localStorage.user);
    return user.role_id === 1 ? true : false;
  }

  getToken(){
    return `Bearer ${localStorage.token}`;
  }

  oAuthSignup(body: any){
    return this.apiService.post(this.OAuthUrl, body);
  }
  cartSubject=new Subject<any>();
}
