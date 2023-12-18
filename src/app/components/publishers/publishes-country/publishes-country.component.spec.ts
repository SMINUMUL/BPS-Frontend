import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishesCountryComponent } from './publishes-country.component';

describe('PublishesCountryComponent', () => {
  let component: PublishesCountryComponent;
  let fixture: ComponentFixture<PublishesCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishesCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishesCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
