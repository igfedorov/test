import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentInputsComponent } from './payment-inputs/payment-inputs.component';
import { PaymentTableComponent } from './payment-table/payment-table.component';
import { PaymentsComponent } from './payments.component';
import { PaymentDataService } from './shared/payment-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorCheckDirective } from './shared/error-check.directive';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [PaymentInputsComponent, PaymentTableComponent, PaymentsComponent, ErrorCheckDirective],
  providers: [PaymentDataService],
  exports: [PaymentsComponent]
})
export class PaymentsModule { }
