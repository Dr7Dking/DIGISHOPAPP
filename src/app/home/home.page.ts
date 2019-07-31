import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanierService } from '../services/panier.service';
import { AuthentificationService } from '../services/authentification.service';
import { NavController } from '@ionic/angular';
import { BoutiquesService } from '../services/boutiques.service';
import { Boutique } from '../pages/boutiques/boutique.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  boutiques: Boutique []; 
  
constructor(private boutiquesService : BoutiquesService, private router: Router, private navController: NavController){
 
  }
  ngOnInit(){
        this.boutiques = this.boutiquesService.getAllBoutiques();
  }
      
  openCart() {
    this.router.navigate(['cart']);
  }
  openHome() {
    this.router.navigate(['home']);
  }
  openParametres() {
    this.router.navigate(['parametres']);
  }
  openCompte() {
    this.router.navigate(['compte']);
  }
  openSwitch() {
    this.router.navigate(['switch']);
  }
  openBoutiques() {
    this.router.navigate(['boutiques']);
  }
  declareBoutiques() : void
  {
    this.boutiques = this.boutiquesService.getAllBoutiques();
     // this.boutiques = [];
  }
  filterBoutiques(param : any) : void
   {
        this.declareBoutiques();
      let val : string 	= param;

      // DON'T filter the technologies IF the supplied input is an empty string
      if (val.trim() !== '')
      {
         this.boutiques = this.boutiques.filter((item) =>
         {
           return item.nomBoutique.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(val.toLowerCase()) > -1;
         })
      }
   }
   onFilter(category : string) : void
   {
          this.declareBoutiques();
      // Only filter the technologies array IF the selection is NOT equal to value of all
      if (category.trim() !== 'all')
      {
         this.boutiques = this.boutiques.filter((item) =>
         {
           return item.description.toLowerCase().indexOf(category.toLowerCase()) > -1;
         })
      }
   }
  
   
  
}