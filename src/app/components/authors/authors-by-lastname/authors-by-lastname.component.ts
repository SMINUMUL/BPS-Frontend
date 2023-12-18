import { Component } from '@angular/core';
import { AuthorModel } from '../../../models/author-model';
import { AuthorService } from '../../../services/author.service';

@Component({
  selector: 'app-authors-by-lastname',
  templateUrl: './authors-by-lastname.component.html',
  styleUrl: './authors-by-lastname.component.css'
})export class AuthorsByLastnameComponent {
  getAuthorName:AuthorModel ;
  // | null=null;
  getName:string;
 
constructor(private authorService: AuthorService){}
 
// ngOnInit(): void{
//   this.getName = '';
// }
 
viewAll(){
  this.getAuthorsByLastName();
}
 
// getAuthorsByLastName() {
 
  getAuthorsByLastName() {
    this.authorService.getAuthorsByLastName(this.getName).subscribe(
      (data: AuthorModel[]) => {
        this.getAuthorName = data.length > 0 ? { ...data[0] } : null;
      },
      error => {
        console.error('Error fetching authors:', error);
      }
    );
  }
 
}