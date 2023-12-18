import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishesNameComponent } from './publishes-name.component';

describe('PublishesNameComponent', () => {
  let component: PublishesNameComponent;
  let fixture: ComponentFixture<PublishesNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishesNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishesNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
