import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishesCityComponent } from './publishes-city.component';

describe('PublishesCityComponent', () => {
  let component: PublishesCityComponent;
  let fixture: ComponentFixture<PublishesCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishesCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishesCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
