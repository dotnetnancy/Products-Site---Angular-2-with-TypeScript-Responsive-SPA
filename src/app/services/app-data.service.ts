import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { Product } from '../view-models/product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDataService {

  private products : Array<Product> = [
    { id: 1, name: 'Switzerland',  price: 87.67 },
    { id: 2, name: 'Luxembourg',   price: 83.29 },
    { id: 3, name: 'Australia', price: 82.4 },
    { id: 4, name: 'Singapore', price: 81.78 },
    { id: 5, name: 'Czech Republic', price: 81.47 },
    { id: 6, name: 'Germany', price: 80.47 },
    { id: 7, name: 'Spain', price: 79.09 },
    { id: 8, name: 'Austria', price: 78.32 },
    { id: 9, name: 'Sweden', price: 78.09 },
    { id: 10, name: 'Norway', price: 78.04 },
    { id: 11, name: 'India', price: 65.04 },
    { id: 12, name: 'USA', price: 65.04 }
  ];

  constructor(private userService: UserService) {
  }

  createProduct(vm: Product) : Observable<any> {
    // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Unable to create product'));
    let id = 0;
    this.products.forEach(c => { if (c.id >= id) id = c.id + 1 });
    vm.id = id;
    this.products.push(vm);
    return Observable.of(vm);
  }

  deleteProduct(id: number) : Observable<any> {
    // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Delete error.'));
    return Observable.of({}).delay(2000)
     .do(e => this.products.splice(this.products.findIndex(c => c.id == id), 1));
  }

  getProducts() : Observable<any> {
    return Observable.of(this.products);
  }

  getProduct(id: number) : Observable<Product> {
    const product = this.products.find(c => c.id == id);
    return Observable.of(product);
  }

  updateProduct(updatedProduct: Product) : Observable<any> {
    const product = this.products.find(c => c.id == updatedProduct.id);
    Object.assign(product, updatedProduct);
    return Observable.of(product).delay(2000);
    // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw(''));
  }
  
}
