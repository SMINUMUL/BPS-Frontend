import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PublisherModel } from '../../models/publisher-model';
import { TitleModel } from '../../models/title-model';
import { PublisherService } from '../../services/publisher.service';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-update-title',
  templateUrl: './update-title.component.html',
  styleUrl: './update-title.component.css'
})
export class UpdateTitleComponent implements OnInit {

  titleForm: FormGroup;
  publishers: PublisherModel[];
  title: TitleModel;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private publisherService: PublisherService,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    this.titleForm = this.formBuilder.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      publisherId: ['', Validators.required],
      price: ['', Validators.required],
      advance: ['', Validators.required],
      royalty: ['', Validators.required],
      ytdSales: ['', Validators.required],
      notes: [''],
      pubdate: ['', Validators.required],
      imageURLString: [''],
    });

    this.route.params.subscribe(params => {
      const titleName:string = params['titleName'];
      console.log(titleName)
      this.titleService.searchTitleByTitle(titleName).subscribe(
        (data: TitleModel) => {
          this.title = data;
          this.populateForm();
        },
        error => {
          console.error('Error fetching title details:', error);
        }
      );
    });

    this.publisherService.getAllPublishers().subscribe((publishers) => {
      this.publishers = publishers;
    });
  }

  onUpdate() {
    if (this.titleForm.valid) {
      this.title.title = this.titleForm.value.title;
      this.title.type = this.titleForm.value.type;
      this.title.publisher = this.getSelectedPublisher();
      this.title.price = this.titleForm.value.price;
      this.title.advance = this.titleForm.value.advance;
      this.title.royalty = this.titleForm.value.royalty;
      this.title.ytdSales = this.titleForm.value.ytdSales;
      this.title.notes = this.titleForm.value.notes;
      this.title.pubdate = this.titleForm.value.pubdate;
      this.title.imageURLString = this.titleForm.value.imageURLString;

      this.titleService.updateAllTitleDetails(this.title.id,this.title).subscribe(
        (response) => {
          alert('Title Updated successfully!');
        },
        (error) => {
          console.error(error);
          alert('Title Updated successfully!');
        }
      );
    }
  }

  private populateForm() {
    this.titleForm.patchValue({
      title: this.title.title,
      type: this.title.type,
      publisherId: this.title.publisher.id,
      price: this.title.price,
      advance: this.title.advance,
      royalty: this.title.royalty,
      ytdSales: this.title.ytdSales,
      notes: this.title.notes,
      pubdate: this.title.pubdate,
      imageURLString: this.title.imageURLString,
    });
  }

  private getSelectedPublisher(): PublisherModel {
    const selectedPublisherId = +this.titleForm.value.publisherId;
    return this.publishers.find((publisher) => publisher.id === selectedPublisherId);
  }
}
