import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../utilities/models/product';

@Component({
  selector: 'app-product-cell',
  templateUrl: './product-cell.component.html',
  styleUrls: ['./product-cell.component.scss']
})
export class ProductCellComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
