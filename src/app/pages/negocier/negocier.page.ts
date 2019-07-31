import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BoutiquesService } from 'src/app/services/boutiques.service';
import { Boutique } from '../boutiques/boutique.model';

@Component({
  selector: 'app-negocier',
  templateUrl: './negocier.page.html',
  styleUrls: ['./negocier.page.scss'],
})
export class NegocierPage implements OnInit {
  loadedBoutique: Boutique;
  constructor(private activatedRoute: ActivatedRoute, private boutiquesService:BoutiquesService, private router : Router) { 

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
       if (!paramMap.has('boutiqueId')) {
        // redirect
        return this.router.navigate(['/negocier'])  ;
      }
      const boutiqueId = paramMap.get('boutiqueId');
      this.loadedBoutique= this.boutiquesService.getBoutique(boutiqueId);
    });
  }
  openHome() {
    this.router.navigate(['home']);
  }
  openBoutiques() {
    this.router.navigate(['boutiques']);
  }
  openReglages() {
    this.router.navigate(['reglages']);
  }
  openReference() {
    this.router.navigate(['boutique']);
  }
  openNegocier() {
    this.router.navigate(['negocier']);
  }
  openProduits() {
    this.router.navigate(['produits']);
  }
  

}
