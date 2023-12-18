import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5TitlesComponent } from './top-5-titles.component';

describe('Top5TitlesComponent', () => {
  let component: Top5TitlesComponent;
  let fixture: ComponentFixture<Top5TitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Top5TitlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top5TitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
