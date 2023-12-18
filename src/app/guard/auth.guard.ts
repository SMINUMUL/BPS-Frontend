// auth.guard.ts

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // if (this.authService.isLoggedIn) {
    //   // User is authenticated, allow navigation
    //   return true;
    // } else {
    //   // User is not authenticated, redirect to the home page
    //   this.router.navigate(['']);
    //   return false;
    // }
    return true;
  }
}
