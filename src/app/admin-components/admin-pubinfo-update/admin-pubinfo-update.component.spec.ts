import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPubinfoUpdateComponent } from './admin-pubinfo-update.component';

describe('AdminPubinfoUpdateComponent', () => {
  let component: AdminPubinfoUpdateComponent;
  let fixture: ComponentFixture<AdminPubinfoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPubinfoUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPubinfoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
