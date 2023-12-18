import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PublisherModel } from '../../models/publisher-model';
import { TitleModel } from '../../models/title-model';
import { PublisherService } from '../../services/publisher.service';
import { TitleService } from '../../services/title.service';
import { AuthorService } from '../../services/author.service';
import { AuthorModel } from '../../models/author-model';
import { TitleAuthorModel } from '../../models/title-author-model';
import { TitleAuthorService } from '../../services/title-author.service';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrl: './add-title.component.css'
})
export class AddTitleComponent {

  titleForm: FormGroup;
  publishers: PublisherModel[];
  authors: AuthorModel[];

  constructor(
    private formBuilder: FormBuilder,
    private publisherService: PublisherService,
    private titleService: TitleService,
    private authorService: AuthorService,
    private titleAuthorService: TitleAuthorService
  ) {}

  ngOnInit() {
    // Initialize form and retrieve publishers
    this.titleForm = this.formBuilder.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      authorId: ['', Validators.required],
      publisherId: ['', Validators.required],
      price: ['', Validators.required],
      advance: ['', Validators.required],
      royalty: ['', Validators.required],
      ytdSales: ['', Validators.required],
      notes: [''],
      pubdate: ['', Validators.required],
      imageURLString: [''],
    });

    this.publisherService.getAllPublishers().subscribe((publishers) => {
      this.publishers = publishers;
    });
    
    this.authorService.getAllAuthors().subscribe((authors) => {
      this.authors = authors;
    });
  }

  onSubmit() {
    if (this.titleForm.valid) {
      const pubdate = this.formatDate(this.titleForm.value.pubdate);
      // Create a new title object
      const newTitle: TitleModel = {
        id: 0, // Set to 0 or generate an appropriate ID based on your logic
        title: this.titleForm.value.title,
        type: this.titleForm.value.type,
        publisher: this.getSelectedPublisher(),
        price: this.titleForm.value.price,
        advance: this.titleForm.value.advance,
        royalty: this.titleForm.value.royalty,
        ytdSales: this.titleForm.value.ytdSales,
        notes: this.titleForm.value.notes,
        pubdate: this.titleForm.value.pubdate,
        imageURLString: this.titleForm.value.imageURLString,
      };

      // Call the service method to add the new title
      this.titleService.addNewTitle(newTitle).subscribe(
        (response) => {
          //this is working Add route here
          this.onSavingTitle(response);
          alert('Title Added successfully!');
        },
        (error) => {
          console.error(error);
        }
      );
      
    }
  }

  private getSelectedPublisher(): PublisherModel {
    // Find the selected publisher from the list
    const selectedPublisherId = +this.titleForm.value.publisherId; // Convert to number
    return this.publishers.find((publisher) => publisher.id === selectedPublisherId);
  }

  private getSelectedAuthor(): AuthorModel {
    // Find the selected publisher from the list
    const selectedAuthorrId = +this.titleForm.value.authorId; // Convert to number
    return this.authors.find((author) => author.id === selectedAuthorrId);
  }

  private formatDate(date: string): string {
    const formattedDate = new Date(date).toISOString().split('T')[0];
    return formattedDate;
  }

  onSavingTitle(titleModel:TitleModel){
    const titleAuthor : TitleAuthorModel = {
      author: this.getSelectedAuthor(),
      title: titleModel,
      royaltyPer: this.titleForm.value.royalty
    }
    this.titleAuthorService.addNewTitleAuthorModel(titleAuthor).subscribe(
      (response) => {
      },
      (error) => {
        //this is working Add route here
        console.error(error);
      }
    );
  }

}
