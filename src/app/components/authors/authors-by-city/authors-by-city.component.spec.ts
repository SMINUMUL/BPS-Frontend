import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsByCityComponent } from './authors-by-city.component';

describe('AuthorsByCityComponent', () => {
  let component: AuthorsByCityComponent;
  let fixture: ComponentFixture<AuthorsByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorsByCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorsByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
