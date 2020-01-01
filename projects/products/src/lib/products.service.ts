import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Product} from './product';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  saveChanges(product: Product) {
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product, {headers})
      .subscribe();
  }
}

