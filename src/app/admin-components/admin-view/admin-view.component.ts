import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleService } from '../../services/title.service';
import { TitleModel } from '../../models/title-model';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  title: TitleModel;
  titleName:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.titleName = params['titleName'];
      this.fetchTitleDetails();
    });
  }

  fetchTitleDetails(): void {
    this.titleService.searchTitleByTitle(this.titleName).subscribe(
      (data: any) => {
        this.title = data;
      },
      error => {
        console.error('Error fetching title details:', error);
      }
    );
  }

  onUpdateClick(): void {
    this.router.navigate(['updateTitle',this.titleName]);
  }
}
