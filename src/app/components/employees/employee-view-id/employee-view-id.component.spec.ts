import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewIdComponent } from './employee-view-id.component';

describe('EmployeeViewIdComponent', () => {
  let component: EmployeeViewIdComponent;
  let fixture: ComponentFixture<EmployeeViewIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeViewIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeViewIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
