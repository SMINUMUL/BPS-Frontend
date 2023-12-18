import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user-model';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  user: UserModel = new UserModel(0, '', '', '');
  newUserDetails: UserModel = new UserModel(0, '', '', '');
  registrationCode: string = '';
  errorMessage: string = '';
  showRegistrationField: boolean = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    console.log(this.user);
    this.userService.validateUser(this.user).subscribe(
      (response) => {
        console.log(response);
        this.authService.storeUser(response.userDTO);
        this.authService.storeToken(response.token);
        this.authService.isLoggedIn = true;
        if(response.userDTO.role=='ADMIN')
        this.router.navigate(['adminList']);
        else if(response.userDTO.role=='CUSTOMER')
        this.router.navigate(['title-dashboard']);
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
    );

    // Hide registration field on login
    this.showRegistrationField = false;
  }

  handleRegistrationAndToggle() {
    if (this.showRegistrationField) {
      // Registration field is already shown, handle registration logic
      if (this.registrationCode === '#CUSTOMER') {
        const newUser = new UserModel(
          0,
          this.user.userName,
          this.user.userPassword,
          'CUSTOMER'
        );

        this.userService.createUser(newUser).subscribe(
          (response) => {
            console.log(response);
            this.newUserDetails = response;
            this.authService.storeUser(response);
            this.authService.isLoggedIn = true;
            this.router.navigate(['']);

            // Show success message using alert
            alert('User created successfully!\nUser Details:\n' +
              `     User ID: ${this.newUserDetails.userId}\n` +
              `     User Name: ${this.newUserDetails.userName}\n` +
              `     User Role: ${this.newUserDetails.role}`);

            // Reset fields and flags
            this.showRegistrationField = false;
            this.registrationCode = '';
            this.newUserDetails = new UserModel(0, '', '', '');
          },
          (error) => {
            console.log(error);
            this.errorMessage = error.error.message;
          }
        );
      } else if (this.registrationCode === '#ADMIN') {
        const newUser = new UserModel(
          0,
          this.user.userName,
          this.user.userPassword,
          'ADMIN'
        );
        this.userService.createUser(newUser).subscribe(
          (response) => {
            console.log(response);
            this.newUserDetails = response;
            this.authService.storeUser(response);
            this.authService.isLoggedIn = true;
            this.router.navigate(['']);

            // Show success message using alert
            alert('User created successfully!\nUser Details:\n' +
              `     User ID: ${this.newUserDetails.userId}\n` +
              `     User Name: ${this.newUserDetails.userName}\n` +
              `     User Role: ${this.newUserDetails.role}`);

            // Reset fields and flags
            this.showRegistrationField = false;
            this.registrationCode = '';
            this.newUserDetails = new UserModel(0, '', '', '');
          },
          (error) => {
            console.log(error);
            this.errorMessage = error.error.message;
          }
        );
      } else {
        this.errorMessage = 'Invalid registration code.';
      }
    } else {
      // Registration field is not shown, toggle it
      this.showRegistrationField = true;
    }
  }

  toggleRegistrationField() {
    this.showRegistrationField = !this.showRegistrationField;
    if (!this.showRegistrationField) {
      this.registrationCode = '';
    }
  }
}
