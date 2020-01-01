import {Component, Input} from '@angular/core';

import {Product} from '../product';

@Component({
  selector: 'lib-product',
  template: `
      <span class="product-name">{{product.name}}</span>
      <div class="product-image">
          <img [src]="product.imgUrl" [alt]="product.name"/>
      </div>
      <span class="product-price">{{product.price | currency:'USD':'symbol':'.0' }}</span>
  `,
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
}
