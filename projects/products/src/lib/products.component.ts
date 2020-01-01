import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductsService} from './products.service';
import {Observable} from 'rxjs';
import {Product} from './product';

@Component({
  selector: 'lib-products',
  template: `
      <div class="products-list">
          <lib-product *ngFor="let product of products$ | async" [product]="product" (click)="productClicked.emit(product)"></lib-product>
      </div>
  `,
  styles: [`
    .products-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 900px;
    }
  `]
})
export class ProductsComponent implements OnInit {
  @Output() productClicked = new EventEmitter<Product>();
  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products$ = this.productsService.getAllProducts();
  }
}
