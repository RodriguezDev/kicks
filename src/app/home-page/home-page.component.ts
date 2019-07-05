import { Component, OnInit } from '@angular/core';
import { Product } from '../utilities/models/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  featuredProducts: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.featuredProducts = [];
    this.featuredProducts.push(new Product('Off White x Nike Air Max 90', 'AM90 Desc', 1200.00, 'Nike', '../../assets/img/off-white-90.jpg', ['9', '10.5']));
    this.featuredProducts.push(new Product('Off White x Nike Blazer Mid', 'Blazer Desc', 1500.00, 'Nike', '../../assets/img/off-white-blazer.jpg', ['9', '10.5']));
    this.featuredProducts.push(new Product('Off White x Nike Air Force 1', 'Force Desc', 1600.00, 'Nike', '../../assets/img/off-white-force.jpg', ['9', '10.5']));
  }

}
