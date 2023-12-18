import { Component } from '@angular/core';
import { AuthorModel } from '../../../models/author-model';
import { AuthorService } from '../../../services/author.service';

@Component({
  selector: 'app-authors-by-state',
  templateUrl: './authors-by-state.component.html',
  styleUrl: './authors-by-state.component.css'
})export class AuthorsByStateComponent {
 
  getAuthorState:AuthorModel ;
  // | null=null;
  getState:string;
 
constructor(private authorService: AuthorService){}
 
// ngOnInit(): void{
//   this.getName = '';
// }
 
viewAll(){
  this.getAuthorsByState();
}
 
// getAuthorsByState() {
 
  getAuthorsByState() {
    this.authorService.getAuthorsByState(this.getState).subscribe(
      (data: AuthorModel[]) => {
        this.getAuthorState = data.length > 0 ? { ...data[0] } : null;
      },
      error => {
        console.error('Error fetching authors:', error);
      }
    );
  }
 
 
}