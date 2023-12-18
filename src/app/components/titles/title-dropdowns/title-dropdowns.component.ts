// Inside TitleDropdownsComponent
import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../services/title.service';
import { PublisherService } from '../../../services/publisher.service';
import { TitleModel } from '../../../models/title-model';
import { PublisherModel } from '../../../models/publisher-model';
import { AuthorService } from '../../../services/author.service';
import { AuthorModel } from '../../../models/author-model';

@Component({
  selector: 'app-title-dropdowns',
  templateUrl: './title-dropdowns.component.html',
  styleUrls: ['./title-dropdowns.component.css'],
})
export class TitleDropdownsComponent implements OnInit {
  Types: Set<string> = new Set();
  publisherNames: Map<string, number> = new Map(); // Map to store publisher names and their IDs
  Years: Set<string> = new Set(); // Set to store unique years
  authorNames: Map<string, string> = new Map();
  authorNamesArray: [string, string][] = [];

  openDropdowns: { [key: number]: boolean } = {};

  constructor(
    private titleService: TitleService,
    private publisherService: PublisherService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.loadTitleItems();
    this.loadPublisherItems();
    this.loadAuthorItems();
  }

  toggleDropdown(dropdownNumber: number): void {
    this.openDropdowns[dropdownNumber] = !this.openDropdowns[dropdownNumber];
  }

  isDropdownOpen(dropdownNumber: number): boolean {
    return this.openDropdowns[dropdownNumber] || false;
  }

  private loadTitleItems(): void {
    this.titleService.getTitles().subscribe(
      (titles: TitleModel[]) => {
        titles.forEach((title: TitleModel) => {
          this.Types.add(title.type);

          // Extract the year (first four characters) from pubdate
          const year = title.pubdate.substring(0, 4);
          this.Years.add(year);
        });
      },
      (error) => {
        console.error('Error loading titles', error);
      }
    );
  }

  private loadPublisherItems(): void {
    this.publisherService.getAllPublishers().subscribe(
      (publishers: PublisherModel[]) => {
        publishers.forEach((publisher: PublisherModel) => {
          this.publisherNames.set(publisher.name, publisher.id);
        });
      },
      (error) => {
        console.error('Error loading publishers', error);
      }
    );
  }

  private loadAuthorItems(): void {
    this.authorService.getAllAuthors().subscribe(
      (authors: AuthorModel[]) => {
        authors.forEach((author: AuthorModel) => {
          // Store first name and last name separately in the map
          this.authorNames.set(author.firstName, author.lastName);
        });
        // Convert the map to an array of key-value pairs
        this.authorNamesArray = Array.from(this.authorNames);
      },
      (error) => {
        console.error('Error loading authors', error);
      }
    );
  }

  Alltitles(): void {
    this.titleService.getTitles().subscribe(
      (data) => {
        this.titleService.updateTitles(data); // initial load
      },
      (error) => {
        console.error('Error fetching titles:', error);
      }
    );
  }
  Categories(item: string): void {
    this.titleService.searchTitlesByType(item).subscribe(
      (data) => {
        this.titleService.updateTitles(data);
      },
      (error) => {
        console.error('Error fetching titles:', error);
      }
    );
  }
  Publishers(item: number): void {
    this.titleService.searchTitlesByPubId(item).subscribe(
      (data) => {
        this.titleService.updateTitles(data);
      },
      (error) => {
        console.error('Error fetching titles:', error);
      }
    );
  }
  TitlesByYear(item: string): void {
    this.titleService.searchTitlesByPubDateLike(item).subscribe(
      (data) => {
        this.titleService.updateTitles(data);
      },
      (error) => {
        console.error('Error fetching titles:', error);
      }
    );
  }
  Authors(item: string): void {
    this.titleService.getTitlesByAuthorName(item).subscribe(
      (data) => {
        this.titleService.updateTitles(data);
      },
      (error) => {
        console.error('Error fetching titles:', error);
      }
    );
  }
}
