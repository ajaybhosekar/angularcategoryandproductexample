import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { ServicesComponent } from './services/services.component';  


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProductComponent},
  /*{path: 'products/viewAll', component: ProductListComponent},
  {path: 'products/add', component: AddProductComponent},
  {path: 'products/update', component: UpdateProductComponent},
  {path: 'products/delete', component: DeleteProductComponent}*/
  
  {path: 'products', component: ProductComponent, 
    children: [
      {path: 'viewAll', component: ProductListComponent},
      {path: 'add', component: AddProductComponent},
      {path: 'update/:id', component: UpdateProductComponent},
      {path: 'delete/:id', component: DeleteProductComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
