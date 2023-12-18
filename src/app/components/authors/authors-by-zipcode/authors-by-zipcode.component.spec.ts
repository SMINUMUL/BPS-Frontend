import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsByZipcodeComponent } from './authors-by-zipcode.component';

describe('AuthorsByZipcodeComponent', () => {
  let component: AuthorsByZipcodeComponent;
  let fixture: ComponentFixture<AuthorsByZipcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorsByZipcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorsByZipcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
