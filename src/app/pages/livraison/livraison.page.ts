import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoutiquesService } from 'src/app/services/boutiques.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {

  constructor(private router: Router, private boutiquesService: BoutiquesService, private navController: NavController ) { }

  
  openShop() {
    this.router.navigate(['shop']);
  }
  ngOnInit() {
    
  }
  openBoutique() {
    this.router.navigate(['shop']);
  }

  payAtLivraison() {
    this.router.navigate(['livraison']);
  }




}
