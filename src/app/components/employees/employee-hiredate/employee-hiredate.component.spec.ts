import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHiredateComponent } from './employee-hiredate.component';

describe('EmployeeHiredateComponent', () => {
  let component: EmployeeHiredateComponent;
  let fixture: ComponentFixture<EmployeeHiredateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeHiredateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeHiredateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
