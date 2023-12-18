import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'app-title-view',
  templateUrl: './title-view.component.html',
  styleUrl: './title-view.component.css'
})
export class TitleViewComponent implements OnInit {
  title: any;

  constructor(private route: ActivatedRoute, private titleService: TitleService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.title = params['titleName'];
      this.fetchTitleDetails();
    });
  }

  fetchTitleDetails(): void {
    this.titleService.searchTitleByTitle(this.title).subscribe(
      (data: any) => {
        this.title = data;
      },
      error => {
        console.error('Error fetching title details:', error);
      }
    );
  }
}