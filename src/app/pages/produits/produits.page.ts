import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {
  
  produits = [];
  panier = [];
  items = [];
  
  constructor(private produitsService : ProduitsService, private router: Router, private navController: NavController,private panierService: PanierService){
    this.getProduits();
  }
    
  getProduits(){
    this.produitsService.getProduits().subscribe((data)=>{
        this.produits = data;
    });
}
ngOnInit() {
  this.items = this.panierService.getProduits();
  this.panier = this.panierService.getPanier();
}


addToPanier(produit) {
  this.panierService.addProduit(produit);
}

openPanier() {
  this.router.navigate(['panier']);
}

}
