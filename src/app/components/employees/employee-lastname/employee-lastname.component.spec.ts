import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLastnameComponent } from './employee-lastname.component';

describe('EmployeeLastnameComponent', () => {
  let component: EmployeeLastnameComponent;
  let fixture: ComponentFixture<EmployeeLastnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeLastnameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeLastnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
