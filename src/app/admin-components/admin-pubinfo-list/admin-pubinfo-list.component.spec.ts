import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPubinfoListComponent } from './admin-pubinfo-list.component';

describe('AdminPubinfoListComponent', () => {
  let component: AdminPubinfoListComponent;
  let fixture: ComponentFixture<AdminPubinfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPubinfoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPubinfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
