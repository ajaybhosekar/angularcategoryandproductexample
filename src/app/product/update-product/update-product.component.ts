import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  categories: Category[] = [];

  product: Product = new Product(0,"", new Category(0,'',''), "", 0);

  message: string = '';
  success: boolean = false;

  constructor(private service: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let productId: number = 0;

    this.service.getAllCategories().subscribe(data => {
      console.log(data);
      this.categories = data;

      this.activatedRoute.params.subscribe(data => {
        productId = data.id;
        this.service.getProduct(productId).subscribe(response => {
          console.log(response);
          this.product = response;
  
        });
        
      });
    });

    
  }

  onUpdate() {
    let categoryName: string = this.product.category.name;
    //console.log(categoryName);
    this.categories.forEach(category => {
      if(category.name === categoryName) {
        this.product.category.categoryId = category.categoryId;
      }
    });
    
    console.log(this.product);
    this.service.updateProduct(this.product).subscribe(data => {
      console.log('response',data);
      if(data) {
        this.success = true;
        this.message = "Product updated successfully";
        
      }
      else {
        this.success = false;
        this.message = "Problem updating data";
      }
      //this.router.navigateByUrl("/products/viewAll");

    })


  }

}
