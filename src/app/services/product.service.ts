import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductModelServer, ServerResponse } from '../../app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  SERVER_URL = environment.SERVER_URL

  constructor(private http: HttpClient) { }


  getAllProducts(numberOfResults = 10) {
    return this.http.get(this.SERVER_URL + '/products', {
      params: {
        limit: numberOfResults.toString()
      }
    }).toPromise();
  }

  getSingleProduct(id: number) {
    return this.http.get(this.SERVER_URL + '/products' + id).toPromise()
  }

  getProductsFromCategory(catName: string) {
    return this.http.get(this.SERVER_URL + '/products/category/' + catName).toPromise();
  }

}
