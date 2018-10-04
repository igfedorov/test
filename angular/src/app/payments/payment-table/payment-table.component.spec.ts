import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PaymentDataService } from '../shared/payment-data.service'
import { PaymentTableComponent } from './payment-table.component';
import {DebugElement} from "@angular/core";

describe('PaymentTableComponent', () => {
  let component: PaymentTableComponent;
  let debugElement: DebugElement;
  let service: PaymentDataService;
  let fixture: ComponentFixture<PaymentTableComponent>;
  const mockData = [
    {name: 'testName0', price: 100, checkedMonths: 1},
    {name: 'testName1', price: 200, checkedMonths: 2},
    {name: 'testName2', price: 300, checkedMonths: 3},
    {name: 'testName3', price: 400, checkedMonths: 4}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTableComponent ],
      providers: [ PaymentDataService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTableComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(PaymentDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onMonthCheck method', () => {
    it('checking the month', () => {
      component.values = mockData;
      component.onMonthCheck(2, true);

      expect(component.values).toEqual([
        {name: 'testName0', price: 100, checkedMonths: 1},
        {name: 'testName1', price: 200, checkedMonths: 2},
        {name: 'testName2', price: 300, checkedMonths: 4},
        {name: 'testName3', price: 400, checkedMonths: 4}
      ]);
    });

    it('unchecking the month', () => {
      component.values = mockData;
      component.onMonthCheck(1, false);

      expect(component.values).toEqual([
        {name: 'testName0', price: 100, checkedMonths: 1},
        {name: 'testName1', price: 200, checkedMonths: 1},
        {name: 'testName2', price: 300, checkedMonths: 4},
        {name: 'testName3', price: 400, checkedMonths: 4}
      ])
    });
  });

  describe('onRemovePayment method', () => {
    it('remove payment', () => {
      component.values = mockData;

      spyOn(service, 'removePayment');
      component.onRemovePayment(2);
      expect(service.removePayment).toHaveBeenCalled();
    });
  });
});
