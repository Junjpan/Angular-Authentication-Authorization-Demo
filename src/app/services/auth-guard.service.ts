import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
//set up a route guard, Angular protect our route using route guard from anomalous user
export class AuthGuardService implements CanActivate {

  constructor(private router:Router,private authService:AuthService) { }

  //the state parameters allow the users access the url originally want to access. IT means after user login, they can visit the same page before they logged in
  canActivate(route,state:RouterStateSnapshot){
   if(this.authService.isLoggedIn()) return true;
   this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}})
   return false
  }

}
