import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminallproductsComponent } from './adminallproducts.component';

describe('AdminallproductsComponent', () => {
  let component: AdminallproductsComponent;
  let fixture: ComponentFixture<AdminallproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminallproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminallproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
