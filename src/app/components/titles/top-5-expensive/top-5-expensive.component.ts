import { Component, OnInit } from '@angular/core';
import { TitleModel } from '../../../models/title-model';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'app-top-5-expensive',
  templateUrl: './top-5-expensive.component.html',
  styleUrls: ['./top-5-expensive.component.css']
})
export class Top5ExpensiveComponent implements OnInit {
  top5ExpensiveTitles: TitleModel[] = [];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.getTop5ExpensiveTitles().subscribe(
      titles => this.top5ExpensiveTitles = titles,
      error => console.error('Error fetching top 5 expensive titles:', error)
    );
  }
}
