import { Injectable } from '@angular/core';
import { UserModel } from './models/user-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}
  isLoggedIn: boolean = false;

  storeUser(user: UserModel): void {
    sessionStorage.setItem("userInfo", JSON.stringify(user));
    this.isLoggedIn = true;
  }

  retrieveUser(): UserModel | null {
    const userString: string | null = sessionStorage.getItem("userInfo");
    if (userString) {
      return JSON.parse(userString);
    } else {
      return null;
    }
  }

  removeUser(): void {
    sessionStorage.removeItem("userInfo");
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }

  storeToken(token: string){
    // store the user object in the session storage
    sessionStorage.setItem("tokenInfo", token);
  }

  retrieveToken(){
      let token: any = sessionStorage.getItem("tokenInfo");
      return token;
  }

  removeToken(){
    sessionStorage.removeItem("tokenInfo");
  }
}
