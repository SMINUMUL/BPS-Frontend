import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByIdComponent } from './sales-by-id.component';

describe('SalesByIdComponent', () => {
  let component: SalesByIdComponent;
  let fixture: ComponentFixture<SalesByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
