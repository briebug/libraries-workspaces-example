import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Product} from '../../../../products/src/lib/product';

@Component({
  selector: 'app-products',
  template: `
      <h3>Products</h3>
      <lib-products (productClicked)="handleProductClicked($event)"></lib-products>
  `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private router: Router) {
  }

  handleProductClicked(product: Product) {
    this.router.navigate(['/products', product.id]).then(r => console.log(r));
  }
}
