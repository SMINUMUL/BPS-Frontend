import { TestBed } from '@angular/core/testing';

import { TitleAuthorService } from './title-author.service';

describe('TitleAuthorService', () => {
  let service: TitleAuthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleAuthorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
