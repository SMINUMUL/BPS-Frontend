import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishesIdComponent } from './publishes-id.component';

describe('PublishesIdComponent', () => {
  let component: PublishesIdComponent;
  let fixture: ComponentFixture<PublishesIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishesIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishesIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
