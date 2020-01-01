import {NgModule} from '@angular/core';

import {PopulateFormDirective} from './directives/populate-form.directive';

@NgModule({
  declarations: [PopulateFormDirective],
  exports: [PopulateFormDirective]
})
export class SharedModule {
}
