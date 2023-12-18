import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5ExpensiveComponent } from './top-5-expensive.component';

describe('Top5ExpensiveComponent', () => {
  let component: Top5ExpensiveComponent;
  let fixture: ComponentFixture<Top5ExpensiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Top5ExpensiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top5ExpensiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
