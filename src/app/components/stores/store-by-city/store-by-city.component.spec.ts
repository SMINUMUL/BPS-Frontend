import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreByCityComponent } from './store-by-city.component';

describe('StoreByCityComponent', () => {
  let component: StoreByCityComponent;
  let fixture: ComponentFixture<StoreByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreByCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
