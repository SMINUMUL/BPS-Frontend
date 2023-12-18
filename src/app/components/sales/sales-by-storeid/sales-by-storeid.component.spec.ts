import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByStoreidComponent } from './sales-by-storeid.component';

describe('SalesByStoreidComponent', () => {
  let component: SalesByStoreidComponent;
  let fixture: ComponentFixture<SalesByStoreidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesByStoreidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesByStoreidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
