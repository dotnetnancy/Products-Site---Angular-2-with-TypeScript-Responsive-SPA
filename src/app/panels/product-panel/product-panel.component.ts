import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../view-models/Product';

@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.css']
})
export class ProductPanelComponent implements OnInit {

  @Input() product: Product;
  @Input() index = 1;

  constructor() { }

  ngOnInit() {
  }

}
