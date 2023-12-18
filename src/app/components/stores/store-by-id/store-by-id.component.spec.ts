import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreByIdComponent } from './store-by-id.component';

describe('StoreByIdComponent', () => {
  let component: StoreByIdComponent;
  let fixture: ComponentFixture<StoreByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
