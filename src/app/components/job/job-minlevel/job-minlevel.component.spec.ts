import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobMinlevelComponent } from './job-minlevel.component';

describe('JobMinlevelComponent', () => {
  let component: JobMinlevelComponent;
  let fixture: ComponentFixture<JobMinlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobMinlevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobMinlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
