import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { Product } from '../view-models/product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDataService {

  private products : Array<Product> = [
    { id: 1, name: 'Boxing Gloves',  price: 25.00 },
    { id: 2, name: 'Eliptical Machine',   price: 2000.00 },
    { id: 3, name: 'Free Weights', price: 500.00 },
    { id: 4, name: 'Grep Strengthener', price: 18.99 },
    { id: 5, name: 'Squash', price: 88.95 },
    { id: 6, name: 'Yoga', price: 56.75 },
    { id: 7, name: 'AB Trainer', price: 79.99 },
    { id: 8, name: 'Fitness Benches', price: 325.00 },
    { id: 9, name: 'Barbell', price: 150.59 },
    { id: 10, name: 'Plates', price: 425.25 },
    { id: 11, name: 'Straps', price: 65.00 },
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
