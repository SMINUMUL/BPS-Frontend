import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../services/title.service';
import { TitleModel } from '../../../models/title-model';

@Component({
  selector: 'app-titles-list',
  templateUrl: './titles-list.component.html',
  styleUrls: ['./titles-list.component.css']
})
export class TitlesListComponent implements OnInit {
  titles: TitleModel[] = [];

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.titles$.subscribe((titles) => {
      this.titles = titles;
    });
    this.titleService.getTitles().subscribe(
      (data) => {
        this.titleService.updateTitles(data); // initial load
      },
      (error) => {
        console.error('Error fetching titles:', error);
      }
    );
  }
}
