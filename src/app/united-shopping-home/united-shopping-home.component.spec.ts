import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnitedShoppingHomeComponent } from './united-shopping-home.component';

describe('UnitedShoppingHomeComponent', () => {
  let component: UnitedShoppingHomeComponent;
  let fixture: ComponentFixture<UnitedShoppingHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitedShoppingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitedShoppingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
