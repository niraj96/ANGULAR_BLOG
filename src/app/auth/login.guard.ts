import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../services/user.service'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  isLoggedIn:Boolean = false;
  constructor(private routes: Router, private authService: UserService){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{

      this.isLoggedIn = this.authService.validuser();
     
      if (this.isLoggedIn) {
       
        return true;
      }
      else {
        this.routes.navigate(['/']);
        return false;
      } 
   
  }
  
}
