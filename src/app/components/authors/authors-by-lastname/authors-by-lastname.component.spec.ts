import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsByLastnameComponent } from './authors-by-lastname.component';

describe('AuthorsByLastnameComponent', () => {
  let component: AuthorsByLastnameComponent;
  let fixture: ComponentFixture<AuthorsByLastnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorsByLastnameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorsByLastnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
