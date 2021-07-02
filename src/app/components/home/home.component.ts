import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModelServer, ServerResponse } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  
  async getAllProducts() {
    try {
      let prods: any = await this.productService.getAllProducts()
      this.products = prods.products
      console.log(this.products)
    } catch (error) {
      console.log(error)
    }
  }
  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
    
  }
  

}
