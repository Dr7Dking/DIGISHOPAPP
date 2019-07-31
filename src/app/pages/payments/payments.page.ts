import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  constructor(private router: Router) {
  }

  payAtLivraison() {
    this.router.navigate(['livraison']);
  }
  openResultat() {
    this.router.navigate(['resultat']);
  }
  openPaypal() {
    this.router.navigate(['paypal']);
  }
  openmomo() {
    this.router.navigate(['momo']);
  }

  ngOnInit() {
  }
}
