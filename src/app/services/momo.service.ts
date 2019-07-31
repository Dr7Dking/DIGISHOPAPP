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
export class MomoService {
 // getApiUrl : string =" https://developer.mtn.cm/OnlineMomoWeb/faces/transaction/transactionRequest.xhtml?idbouton=2&typebouton=PAIE&_amount=10&_tel=676012940&_email=erictallambunwe@gmail.com";
 getApiUrl : string =" https://developer.mtn.cm/OnlineMomoWeb/faces/transaction/transactionRequest.xhtml?idbouton=2&typebouton=PAIE&_amount=+amount+&_tel=652743455&_email=erictallambunwe@gmail.com";
  constructor(public http: Http, private router: Router) {
  console.log('Hello MomoService Provider');
  }


 payWithMomo() {

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
