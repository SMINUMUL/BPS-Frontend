import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreByNameComponent } from './store-by-name.component';

describe('StoreByNameComponent', () => {
  let component: StoreByNameComponent;
  let fixture: ComponentFixture<StoreByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreByNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
