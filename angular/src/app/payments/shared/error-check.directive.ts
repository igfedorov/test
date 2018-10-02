import {Directive, Input, HostBinding} from '@angular/core';
import {FormControl} from "@angular/forms";

@Directive({
  selector: '[appErrorCheck]'
})
export class ErrorCheckDirective {
  @Input() inputControl: FormControl;

  @HostBinding('style.visibility') get visiblity(): string {
    return this.inputControl.invalid && this.inputControl.touched ? 'visible' : 'hidden'
  }


}
