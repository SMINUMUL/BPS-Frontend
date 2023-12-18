import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFirstnameComponent } from './employee-firstname.component';

describe('EmployeeFirstnameComponent', () => {
  let component: EmployeeFirstnameComponent;
  let fixture: ComponentFixture<EmployeeFirstnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeFirstnameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeFirstnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
