import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobMaxlevelComponent } from './job-maxlevel.component';

describe('JobMaxlevelComponent', () => {
  let component: JobMaxlevelComponent;
  let fixture: ComponentFixture<JobMaxlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobMaxlevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobMaxlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
