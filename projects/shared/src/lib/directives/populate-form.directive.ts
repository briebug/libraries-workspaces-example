import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';

export interface FormInfo {
  form: FormGroup;
  model: any;
}

@Directive({
  selector: '[libPopulateForm]'
})
export class PopulateFormDirective implements OnChanges {

  @Input('libPopulateForm') formInfo: FormInfo;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.formInfo && changes.formInfo.currentValue !== changes.formInfo.previousValue) {
      this.populateForm();
    }
  }

  private populateForm() {
    if (this.formInfo) {
      this.formInfo.form.patchValue(this.formInfo.model);
    }
  }
}
