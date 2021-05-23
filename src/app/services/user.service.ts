import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  appUrl:string = environment.apiUrl;
  constructor(private http: HttpClient, private routes: Router) { 

  }

  getHeader(){
    let authToken = localStorage.getItem('token');
   
    let headers = new HttpHeaders({
      token: authToken
    });
   
    return headers;
  }

  validuser():boolean{
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
    
  }

  afterSignin(data){
    return this.http.post(this.appUrl+'user/login', data , );
    
  }

  afterSignup(data){
    return this.http.post(this.appUrl+'user/signup', data );
  }

  userLogout(){
    localStorage.removeItem('token');
    this.routes.navigate(['/']);
  }
}
