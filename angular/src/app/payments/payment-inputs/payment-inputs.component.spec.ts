import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInputsComponent } from './payment-inputs.component';

describe('PaymentInputsComponent', () => {
  let component: PaymentInputsComponent;
  let fixture: ComponentFixture<PaymentInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
