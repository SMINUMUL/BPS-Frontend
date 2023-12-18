import { Component } from '@angular/core';
import { AuthorModel } from '../../../models/author-model';
import { AuthorService } from '../../../services/author.service';

@Component({
  selector: 'app-authors-by-phone',
  templateUrl: './authors-by-phone.component.html',
  styleUrl: './authors-by-phone.component.css'
})export class AuthorsByPhoneComponent {
 
  getAuthorNumber:any;
  getPhone:any;
 
constructor(private authorService: AuthorService){}
 
viewAll(){
  this.getAuthorsByPhone();
}
getAuthorsByPhone() {
  // console.log('Before making the request. Phone:', this.getNumber);
  this.authorService.getAuthorByPhone(this.getPhone).subscribe(
    (data: AuthorModel) => {
      console.log('Received data:', data);
      this.getAuthorNumber=data;
      // this.getAuthorNumber = data.length > 0 ? { ...data[0] } : null;
    },
    error => {
      console.error('Error fetching authors:', error);
    }
  );
}
}