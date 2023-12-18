import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreByZipComponent } from './store-by-zip.component';

describe('StoreByZipComponent', () => {
  let component: StoreByZipComponent;
  let fixture: ComponentFixture<StoreByZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreByZipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreByZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
