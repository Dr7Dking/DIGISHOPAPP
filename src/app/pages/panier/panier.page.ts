import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  selectedItems = [];
 
  total = 0;
  navController: any;
  constructor(private router: Router, private panierService: PanierService) { }
  
  openPayments() {
    this.router.navigate(['payments']);
  }
  ngOnInit() {
    let items = this.panierService.getPanier();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.idProduit]) {
        selected[obj.idProduit].count++;
      } else {
        selected[obj.idProduit] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.prixPubliProduit), 0);
  }
  
}
