import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubinfoListComponent } from './pubinfo-list.component';

describe('PubinfoListComponent', () => {
  let component: PubinfoListComponent;
  let fixture: ComponentFixture<PubinfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PubinfoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PubinfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
