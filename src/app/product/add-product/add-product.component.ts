import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  //categories: string[] = ["Electronics", "Computers", "Mobiles"];
  categories: Category[] = [];

  product: Product = new Product(0,"", new Category(0,'',''), "", 0);

  message: string = '';
  success: boolean = false;

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit() {
    this.service.getAllCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }

  onSubmit() {
    //console.log(this.prod);
    let categoryName: string = this.product.category.name;
    //console.log(categoryName);
    

    this.categories.forEach(category => {
      /*if(category.categoryName === this.product.category.categoryName) {
        this.product.category.categoryId = category.categoryId;
      }*/

      if(category.name === categoryName) {
        this.product.category.categoryId = category.categoryId;
      }
    });
    console.log(this.product);
    this.service.addProduct(this.product).subscribe(data => {
      console.log('response',data);
      if(data) {
        this.success = true;
        this.message = "Product added successfully";
        
      }
      else {
        this.success = false;
        this.message = "Problem adding data";
      }

      this.product = new Product(0,"", new Category(0,'',''), "", 0);
      this.router.navigateByUrl("/products/viewAll");

    })


  }

}
