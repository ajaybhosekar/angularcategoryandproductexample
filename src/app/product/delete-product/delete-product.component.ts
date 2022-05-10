import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  message: String = "";

  constructor(private service: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let productId: number = 0;  

    this.activatedRoute.params.subscribe(data => {
      productId = data.id;
      console.log(productId);
      this.service.deleteProduct(productId).subscribe(response => {
        console.log(response);
        let isDeleted: boolean = response;
        console.log(isDeleted);
        if(isDeleted) {
          this.message = "Product deleted successfully!!!"
        } else {
          this.message = "Unknown error occured";
        }
        this.router.navigateByUrl("/products/viewAll");
      });
    });  
  }

}
