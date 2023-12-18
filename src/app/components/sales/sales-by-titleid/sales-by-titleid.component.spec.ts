import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByTitleidComponent } from './sales-by-titleid.component';

describe('SalesByTitleidComponent', () => {
  let component: SalesByTitleidComponent;
  let fixture: ComponentFixture<SalesByTitleidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesByTitleidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesByTitleidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
