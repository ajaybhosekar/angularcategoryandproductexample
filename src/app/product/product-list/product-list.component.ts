import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = null;

  constructor(private service: ProductService) { 
    //this.products = service.products;
    //this.products = service.getAllProducts();
    this.service.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit() {
  }

  

}
