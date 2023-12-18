import { Component } from '@angular/core';
import { AuthorModel } from '../../../models/author-model';
import { AuthorService } from '../../../services/author.service';

@Component({
  selector: 'app-authors-by-fname',
  templateUrl: './authors-by-fname.component.html',
  styleUrl: './authors-by-fname.component.css'
})export class AuthorsByFnameComponent {
  getAuthorName:AuthorModel ;
  // | null=null;
  getName:string;
 
constructor(private authorService: AuthorService){}
 
// ngOnInit(): void{
//   this.getName = '';
// }
 
viewAll(){
  this.getAuthorsByFirstName();
}
 
 
  getAuthorsByFirstName() {
    this.authorService.getAuthorsByFirstName(this.getName).subscribe(
      (data: AuthorModel[]) => {
        this.getAuthorName = data.length > 0 ? { ...data[0] } : null;
      },
      error => {
        console.error('Error fetching authors:', error);
      }
    );
  }
 
}