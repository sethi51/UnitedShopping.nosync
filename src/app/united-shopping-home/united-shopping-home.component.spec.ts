import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedShoppingHomeComponent } from './united-shopping-home.component';

describe('UnitedShoppingHomeComponent', () => {
  let component: UnitedShoppingHomeComponent;
  let fixture: ComponentFixture<UnitedShoppingHomeComponent>;

  beforeEach(async(() => {
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
