import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsByFnameComponent } from './authors-by-fname.component';

describe('AuthorsByFnameComponent', () => {
  let component: AuthorsByFnameComponent;
  let fixture: ComponentFixture<AuthorsByFnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorsByFnameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorsByFnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
