import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsByStateComponent } from './authors-by-state.component';

describe('AuthorsByStateComponent', () => {
  let component: AuthorsByStateComponent;
  let fixture: ComponentFixture<AuthorsByStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorsByStateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorsByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
