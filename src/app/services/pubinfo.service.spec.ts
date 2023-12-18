import { TestBed } from '@angular/core/testing';

import { PubinfoService } from './pubinfo.service';

describe('PubinfoService', () => {
  let service: PubinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PubinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
