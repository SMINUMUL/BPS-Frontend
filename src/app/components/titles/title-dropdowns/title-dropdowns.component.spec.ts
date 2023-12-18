import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDropdownsComponent } from './title-dropdowns.component';

describe('TitleDropdownsComponent', () => {
  let component: TitleDropdownsComponent;
  let fixture: ComponentFixture<TitleDropdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleDropdownsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
