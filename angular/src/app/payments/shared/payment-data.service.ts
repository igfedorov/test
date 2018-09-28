import { Subject } from "rxjs";
import { Payments } from '../payments'

export class PaymentDataService {
  private payments: Payments[] = [];

  public paymentsList: Subject<Array<Payments>> = new Subject();

  public addPosition(newPayment: Payments): void {
    this.payments.push(newPayment);
    this.paymentsList.next(this.payments);
  }

  public removePayment(index: number): void {
    this.payments.splice(index, 1);
    this.paymentsList.next(this.payments);
  }
}
