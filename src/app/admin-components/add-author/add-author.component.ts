import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.css'
})
export class AddAuthorComponent {authors ={
  id: 0,
  lastName: "",
  firstName: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  contract: false

}
constructor(private authorService: AuthorService,private router: Router) {}
onSubmit() {
  throw new Error('Method not implemented.');
}

addNewAuthor(){

  this.authorService.addAuthor(this.authors).subscribe((Response:
    string)=>console.log(Response));
    this.router.navigate(['adminList'])
  }
}