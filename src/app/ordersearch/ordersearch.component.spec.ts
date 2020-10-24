import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersearchComponent } from './ordersearch.component';

describe('OrdersearchComponent', () => {
  let component: OrdersearchComponent;
  let fixture: ComponentFixture<OrdersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
