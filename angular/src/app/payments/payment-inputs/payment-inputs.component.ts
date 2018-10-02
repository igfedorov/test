import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentDataService } from '../shared/payment-data.service'

@Component({
  selector: 'app-payment-inputs',
  templateUrl: './payment-inputs.component.html',
  styleUrls: ['./payment-inputs.component.scss']
})
export class PaymentInputsComponent implements OnInit {
  public inputsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private paymentDataService: PaymentDataService
  ) { }

  ngOnInit() {
    this.createForm()
  }

  private createForm(): void {
    this.inputsForm = this.formBuilder.group({
      name: [null, Validators.required],
      price: [null, (valControl) => {
        return typeof valControl.value === 'number' && Number(valControl.value) >= 0 ? null : 'invalid_number_format'
      }]
    })
  }

  public onAddClick(): void {
    this.paymentDataService.addPosition(this.inputsForm.value);
    this.inputsForm.reset();
  }
}
