import {NgModule} from '@angular/core';
import {ProductsComponent} from './products.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductComponent} from './product/product.component';
import {CommonModule} from '@angular/common';
import {ManageProductComponent} from './manage-product/manage-product.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/src/lib/shared.module';

const COMPONENTS = [ManageProductComponent, ProductsComponent, ProductComponent];

const ROUTES = [
  {
    path: 'products/:id',
    component: ManageProductComponent
  }
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  exports: COMPONENTS
})
export class ProductsModule {
}
