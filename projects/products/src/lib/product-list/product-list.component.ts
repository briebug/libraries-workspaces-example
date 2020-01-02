import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../product';
import {Observable} from 'rxjs';
import {ProductsService} from '../products.service';

@Component({
  selector: 'lib-product-list',
  template: `
      <div class="product-list">
          <lib-product *ngFor="let product of products$ | async" [product]="product" (click)="productClicked.emit(product)"></lib-product>
      </div>
  `,
  styles: [`
      .product-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 900px;
      }
  `]
})
export class ProductListComponent implements OnInit {
  @Output() productClicked = new EventEmitter<Product>();
  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products$ = this.productsService.getAllProducts();
  }
}
