import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  //http://192.168.100.13:8080/digishop3/json/data/category/2/products/
  //https://jsonplaceholder.typicode.com/posts
//getApiUrl : string = "https://jsonplaceholder.typicode.com/posts";
getApiUrl : string = " https://digishopherokubackend.herokuapp.com/produit/produits";
//getApiUrl : string = "https://digishopheroku.herokuapp.com/produit";


constructor(public http: Http, private router: Router) {
  console.log('Hello ProduitsService Provider');
}

/**
 * 
 * @param error getPosts() {

  return  this.http.get(this.getApiUrl)
          .do((res : Response ) => console.log(res.json()))
          .map((res : Response ) => res.json())  // <-- error shows here
          .catch(this.handleError);

}
 */
getProduits() {

  return  this.http.get(this.getApiUrl)
          .do((res : Response ) => console.log(res.json()))
          .map((res : Response ) => res.json())  // <-- error shows here
          .catch(this.handleError);

}
handleError(error: Response) {
if (error.status == 500) {      
  this.router.navigate(['/']);
} else {
  return Observable.throw(error);
}


}

  
}
