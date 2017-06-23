import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Product } from '../view-models/product';
import { FieldDefinition } from '../../fw/dynamic-forms/field-definition';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  productDefinition: Array<FieldDefinition> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    { key: 'name',
      type: 'string',
      isId: false,
      label: 'Product Name',
      required: true
    },
    {
      key: 'price',
      type: 'number',
      isId: false,
      label: 'Price',
      required: true
    }
  ];
  errorMessage: string;
  operation: string;

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private dataService: AppDataService) { }

  createProduct(product: Product) {
    product.id = 0;
    this.errorMessage = null;
    this.dataService.createProduct(product).subscribe(
      c => this.router.navigate(['/authenticated/product-maint']),
      err => this.errorMessage = 'Error creating product'
      );
  }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];

    if (this.operation === 'create') {
      this.product = { id: 0, name: '', price: null };
    } else {
      this.dataService.getProduct(this.route.snapshot.params['id'])
        .subscribe((product: Product) => this.product = product);
    }
  }

  updateProduct(product: Product) {
    this.errorMessage = null;
    this.dataService.updateProduct(product).subscribe(
      c => this.router.navigate(['/authenticated/product-maint']),
      err => this.errorMessage = 'Error updating product'
      );
  }

}
