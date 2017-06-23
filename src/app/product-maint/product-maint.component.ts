import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Product } from '../view-models/product';

@Component({
  selector: 'app-product-maint',
  templateUrl: './product-maint.component.html',
  styleUrls: ['./product-maint.component.css']
})
export class ProductMaintComponent {

  products : Array<Product>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private dataService: AppDataService,
              private router: Router) { 
    dataService.getProducts().subscribe((data) => this.products = data);
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  createProduct() {
    this.router.navigate(['/authenticated/product-detail', 0, 'create']);
  }

  deleteProduct(id: number) {
    this.isDeleting = true;
    this.dataService.deleteProduct(id).subscribe(
      c => this.cancelDelete(),
      err => { this.deleteError = err; this.isDeleting = false; }
      );
  }

  deleteProductQuestion(id: number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editProduct(id: number) {
    this.router.navigate(['/authenticated/product-detail', id, 'edit']);
  }

  showProductDetail(id: number) {
    this.router.navigate(['/authenticated/product-detail', id, 'details']);
  }

}
