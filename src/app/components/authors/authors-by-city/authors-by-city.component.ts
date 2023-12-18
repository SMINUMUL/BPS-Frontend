import { Component } from '@angular/core';
import { AuthorModel } from '../../../models/author-model';
import { AuthorService } from '../../../services/author.service';

@Component({
  selector: 'app-authors-by-city',
  templateUrl: './authors-by-city.component.html',
  styleUrl: './authors-by-city.component.css'
})export class AuthorsByCityComponent {
 
  getAuthorCity:AuthorModel ;
  // | null=null;
  getCity:string;
 
constructor(private authorService: AuthorService){}
 
// ngOnInit(): void{
//   this.getName = '';
// }
 
viewAll(){
  this.getAuthorsByCity();
}
 
// getAuthorsByCity() {
 
  getAuthorsByCity() {
    this.authorService.getAuthorsByCity(this.getCity).subscribe(
      (data: AuthorModel[]) => {
        this.getAuthorCity = data.length > 0 ? { ...data[0] } : null;
      },
      error => {
        console.error('Error fetching authors:', error);
      }
    );
  }
 
}