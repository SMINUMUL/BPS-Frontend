import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePubidComponent } from './employee-pubid.component';

describe('EmployeePubidComponent', () => {
  let component: EmployeePubidComponent;
  let fixture: ComponentFixture<EmployeePubidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeePubidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeePubidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
