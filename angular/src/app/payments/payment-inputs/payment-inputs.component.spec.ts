import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { PaymentDataService } from '../shared/payment-data.service';
import { ErrorCheckDirective } from '../shared/error-check.directive';
import { PaymentInputsComponent } from './payment-inputs.component';

describe('PaymentInputsComponent', () => {
  let component: PaymentInputsComponent;
  let fixture: ComponentFixture<PaymentInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ PaymentInputsComponent, ErrorCheckDirective ],
      providers: [ PaymentDataService ]
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
