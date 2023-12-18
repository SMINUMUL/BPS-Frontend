import { Component, OnInit } from '@angular/core';
import { TitleModel } from '../../models/title-model';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.css'
})
export class AdminListComponent implements OnInit {
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
