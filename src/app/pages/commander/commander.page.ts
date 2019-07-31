import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.page.html',
  styleUrls: ['./commander.page.scss'],
})
export class CommanderPage implements OnInit {
  selectedItems = [];
 
  total = 0;
  navController: any;

  constructor(private router: Router, private cartService: CartService) { }
  Commander() {
    this.router.navigate(['commander']);
  }
  openResultat() {
    this.router.navigate(['resultat']);
  }
  openPayments(){
    this.router.navigate(['payments']);
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
