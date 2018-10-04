import { TestBed, inject } from '@angular/core/testing';

import { PaymentDataService } from './payment-data.service';
import {async} from "@angular/core/testing";

describe('PaymentDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentDataService]
    });
  });

  it('should be created', inject([PaymentDataService], (service: PaymentDataService) => {
    expect(service).toBeTruthy();
  }));

  it('addPosition', async(inject([PaymentDataService], (service: PaymentDataService) => {
    service.paymentsList.subscribe((response) => {
      expect(response).toEqual([{name: 'testName1', price: 100}])
    });

    service.addPosition({name: 'testName1', price: 100});
  })));

  it('removePayment', async(inject([PaymentDataService], (service: PaymentDataService) => {
    service.addPosition({name: 'testName1', price: 100});
    service.addPosition({name: 'testName2', price: 200});
    service.addPosition({name: 'testName3', price: 300});

    service.paymentsList.subscribe((response) => {
      expect(response).toEqual([
        {name: 'testName1', price: 100},
        {name: 'testName3', price: 300}
      ]);
    });
    service.removePayment(1);
  })));
});
