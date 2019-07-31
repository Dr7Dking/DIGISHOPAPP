import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NavController } from '@ionic/angular';
import { ProduitsService } from 'src/app/services/produits.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {
  
  produits = [];
  cart = [];
  items = [];
  
  constructor(private produitsService : ProduitsService, private router: Router, private navController: NavController,private cartService: CartService){
    this.getProduits();
  }
    
  getProduits(){
    this.produitsService.getProduits().subscribe((data)=>{
        this.produits = data;
    });
}
ngOnInit() {
  this.items = this.cartService.getProducts();
  this.cart = this.cartService.getCart();
}


addToCart(product) {
  this.cartService.addProduct(product);
}

openCart() {
  this.router.navigate(['cart']);
}



}
