import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsByPhoneComponent } from './authors-by-phone.component';

describe('AuthorsByPhoneComponent', () => {
  let component: AuthorsByPhoneComponent;
  let fixture: ComponentFixture<AuthorsByPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorsByPhoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorsByPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
