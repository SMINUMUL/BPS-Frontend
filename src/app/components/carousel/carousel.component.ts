// carousel.component.ts

import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { TitleModel } from '../../models/title-model';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'] // Correcting the property name to styleUrls
})
export class CarouselComponent implements OnInit {
  titles: TitleModel[] = [];

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.loadTop5Titles();
  }

  loadTop5Titles(): void {
    this.titleService.getTop5Titles().subscribe(
      (titles: TitleModel[]) => {
        this.titles = titles;
      },
      (error) => {
        console.error('Error fetching top 5 titles:', error);
      }
    );
  }
}
