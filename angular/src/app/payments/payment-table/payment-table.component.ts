import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaymentDataService } from '../shared/payment-data.service';
import { Payments } from '../payments';
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.scss']
})
export class PaymentTableComponent implements OnInit, OnDestroy{
  public values: Payments[] = [];
  public destroyed$: Subject<null> = new Subject();
  public get total(): number  {
    let result: number = 0;

    this.values.forEach((value: Payments) => {
      if (value.checkedMonths) {
        result += (value.checkedMonths * value.price);
      }
    });

    return result;
  }
  private subscribe;

  constructor(
    private paymentDataService: PaymentDataService
  ) { }

  ngOnInit() {
    this.subscribe = this.paymentDataService.paymentsList
      .pipe(takeUntil(this.destroyed$))
      .subscribe((values: Payments[]) => {
        this.values = values;
      });
  }

  ngOnDestroy() {
    this.destroyed$.complete();
  }

  public onMonthCheck(index: number, checked: boolean): void {
    const currentValue: Payments = this.values[index];

    if (!currentValue.checkedMonths) {
      currentValue.checkedMonths = 1;
    } else {
      checked ? currentValue.checkedMonths++ : currentValue.checkedMonths--
    }
  }

  public onRemovePayment(index: number) {
    this.paymentDataService.removePayment(index)
  }
}
