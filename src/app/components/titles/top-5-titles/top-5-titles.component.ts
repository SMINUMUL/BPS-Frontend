import { Component, OnInit } from '@angular/core';
import { TitleModel } from '../../../models/title-model';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'app-top-5-titles',
  templateUrl: './top-5-titles.component.html',
  styleUrls: ['./top-5-titles.component.css']
})
export class Top5TitlesComponent implements OnInit {
  top5Titles: TitleModel[] = [];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.getTop5Titles().subscribe(
      titles => this.top5Titles = titles,
      error => console.error('Error fetching top 5 titles:', error)
    );
  }
}
