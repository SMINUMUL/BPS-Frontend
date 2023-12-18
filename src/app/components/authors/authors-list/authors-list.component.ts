import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../../../models/author-model';
import { AuthorService } from '../../../services/author.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrl: './authors-list.component.css'
})export class AuthorsListComponent implements OnInit {
 
  authors: AuthorModel[];
  constructor(private authorservice: AuthorService) { }
 
  ngOnInit(): void {
 
    this.getAuthors();
 
 
    }
  private getAuthors() {
    this.authorservice.getAllAuthors().subscribe(data =>{this.authors = data;
    });
 
    }
   
 
  }