import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {ProductsService} from '../products.service';
import {Product} from '../product';

@Component({
  selector: 'lib-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  form: FormGroup;
  product$: Observable<Product>;

  constructor(private fb: FormBuilder, private productsService: ProductsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      imgUrl: '',
      name: '',
      price: ''
    });

    this.product$ = this.route.paramMap.pipe(switchMap(paramMap => {
      return this.productsService.getProductById(+paramMap.get('id'));
    }));
  }

  saveChanges(productToUpdate: Product) {
    const updatedProduct = {...productToUpdate, ...this.form.value};
    this.productsService.saveChanges(updatedProduct);
    this.form.markAsPristine();
  }
}
