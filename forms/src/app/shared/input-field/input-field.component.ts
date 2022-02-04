import { Component, forwardRef, Input,  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
}

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [INPUT_VALUE_ACCESSOR]
})
export class InputFieldComponent implements ControlValueAccessor {

@Input() classeCss: any;
@Input() id:string | any;
@Input() label!: string;
@Input() type = 'text';
@Input() control: any;
@Input() placeholder!:string;
@Input() isReadOnly = false;

private innerValue: any;

get value() {
  return this.innerValue;
}

set value(v: any) {
  if (v !== this.innerValue){
    this.innerValue = v;
    this.onChangeCb(v)
  }
}

   constructor() { }

   onChangeCb:( any: any) => void = () => {};
   onTouchCb:( any: any) => void = () => {}

  writeValue(v: any): void {
   this.value =v;

  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
   this.onTouchCb = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isReadOnly =isDisabled;
  }

  }


