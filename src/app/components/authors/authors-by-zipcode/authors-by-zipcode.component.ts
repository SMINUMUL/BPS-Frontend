import { Component } from '@angular/core';
import { AuthorModel } from '../../../models/author-model';
import { AuthorService } from '../../../services/author.service';

@Component({
  selector: 'app-authors-by-zipcode',
  templateUrl: './authors-by-zipcode.component.html',
  styleUrl: './authors-by-zipcode.component.css'
})export class AuthorsByZipcodeComponent {
 
 
 
  getAuthorCode:AuthorModel ;
  // | null=null;
  getCode:string;
 
constructor(private authorService: AuthorService){}
 
// ngOnInit(): void{
//   this.getName = '';
// }
 
viewAll(){
  this.getAuthorsByZip();
}
 
// getAuthorsByLastName() {
 
  getAuthorsByZip() {
    this.authorService.getAuthorsByZip(this.getCode).subscribe(
      (data: AuthorModel[]) => {
        this.getAuthorCode = data.length > 0 ? { ...data[0] } : null;
      },
      error => {
        console.error('Error fetching authors:', error);
      }
    );
  }
 
}