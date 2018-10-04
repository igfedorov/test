import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { PaymentsComponent } from './payments.component';
import { PaymentInputsComponent } from './payment-inputs/payment-inputs.component'
import { PaymentTableComponent } from './payment-table/payment-table.component'
import { ErrorCheckDirective } from './shared/error-check.directive'
import { PaymentDataService } from './shared/payment-data.service'

describe('PaymentsComponent', () => {
  let component: PaymentsComponent;
  let fixture: ComponentFixture<PaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ PaymentsComponent, PaymentInputsComponent, PaymentTableComponent, ErrorCheckDirective ],
      providers: [ PaymentDataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
