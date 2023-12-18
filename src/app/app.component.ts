import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-publishing-frontend';
  constructor(private authService: AuthService){}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get getRole(): string | null {
    const user = this.authService.retrieveUser();
    return user ? user.role : null;
  }

}
