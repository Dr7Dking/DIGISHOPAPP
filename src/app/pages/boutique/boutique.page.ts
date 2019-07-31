import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoutiquesService } from 'src/app/services/boutiques.service';
import { Boutique } from '../boutiques/boutique.model';
import { AlertController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { ProduitsService } from 'src/app/services/produits.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.page.html',
  styleUrls: ['./boutique.page.scss'],
})
export class BoutiquePage implements OnInit {
  produits = [];
  cart = [];
  items = [];
  loadedBoutique: Boutique;
  constructor(private activatedRoute: ActivatedRoute, private boutiquesService:BoutiquesService, private router : Router,private cartService: CartService, private produitsService : ProduitsService, private callNumber: CallNumber, private sms: SMS) { 
    this.getProduits();
//public androidPermissions: AndroidPermissions
  }
   
  getProduits(){
    this.produitsService.getProduits().subscribe((data)=>{
        this.produits = data;
    });
}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
       if (!paramMap.has('boutiqueId')) {
        // redirect
        return this.router.navigate(['/boutiques'])  ;
      }
      const boutiqueId = paramMap.get('boutiqueId');
      this.loadedBoutique= this.boutiquesService.getBoutique(boutiqueId);
    });
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }
  callNow(number) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
   sendSms(){
    
   // this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(() => {
    this.sms.send('697978048','Bonjour Prospere!');
  //}).catch((err) => {
    //  alert(JSON.stringify(err));
  //});
  }
  

addToCart(product) {
  this.cartService.addProduct(product);
}
opendetails(){
  this.router.navigate(['produit-details'])
}
  openCompte() {
    this.router.navigate(['compte']);
  }
  openCart() {
    this.router.navigate(['cart']);
  }
  openProduits() {
    this.router.navigate(['produits']);
  }
  openNegocier() {
    this.router.navigate(['negocier']);
  }
  openReference() {
    this.router.navigate(['boutique']);
  }
  openParametres() {
    this.router.navigate(['parametres']);
  }
  openHome() {
    this.router.navigate(['home']);
  }
  openBoutiques() {
    this.router.navigate(['boutiques']);
  }


}
