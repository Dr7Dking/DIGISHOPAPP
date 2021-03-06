import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { PaymentsPage } from '../payments/payments.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  selectedItems = [];
 
  total = 0;
  navController: any;
  constructor(private router: Router, private cartService: CartService) { }
  
  openPayments() {
    this.router.navigate(['payments']);
  }
  openCommander() {
    this.router.navigate(['commander']);
  }
  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.prixPubliProduit), 0);
  }

}
