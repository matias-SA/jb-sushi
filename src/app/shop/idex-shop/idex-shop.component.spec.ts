import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdexShopComponent } from './idex-shop.component';

describe('IdexShopComponent', () => {
  let component: IdexShopComponent;
  let fixture: ComponentFixture<IdexShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdexShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdexShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
