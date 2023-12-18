import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishesStateComponent } from './publishes-state.component';

describe('PublishesStateComponent', () => {
  let component: PublishesStateComponent;
  let fixture: ComponentFixture<PublishesStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishesStateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishesStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
