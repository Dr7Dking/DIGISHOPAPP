import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private data =
  [
    {
      shop:'Alimentaire',
      category: 'Pizza',
      expanded: true,
      produits: [
        { idProduit: 0, nomProduit: 'veste', image: '/assets/img/orange.png', prixPubliProduit: '3000' },
        { idProduit: 1, nomProduit: 'veste', image: '/assets/img/orange.png', prixPubliProduit: '3000' },
        { idProduit: 2, nomProduit: 'chemise', image: '/assets/images/1.png', prixPubliProduit: '3000' },
        { idProduit: 3, nomProduit: 'balerie', image: '/assets/images/2..png', prixPubliProduit: '3000' },
        { idProduit: 4, nomProduit: 't-shirt', image: '/assets/images/3.png', prixPubliProduit: '3000' },
        { idProduit: 5, nomProduit: 'veste', image: '/assets/images/4.png', prixPubliProduit: '3000' },
        { idProduit: 6, nomProduit: 'balerie', image: '/assets/images/1.png', prixPubliProduit: '3000' },
        { idProduit: 7, nomProduit: 'basket', image: '/assets/images/2.png', prixPubliProduit: '3000' },
        { idProduit: 8, nomProduit: 'tricot', image: '/assets/images/2.png', prixPubliProduit: '3000' },
      ]
    },                                                 
    {
      shop:'Vetements',
      category: 'Pasta',
      produits:
      [
        { id: 4, name: 'Mac & Cheese', price: '8' },
        { id: 5, name: 'Bolognese', price: '6' }
      ]
    },
    {
      shop:'Electronique',
      category: 'Salad',
      produits: [
        { id: 6, name: 'Mac Book Pro', price: '10000' },
        { id: 7, name: 'Samsung A3', price: '200' },
        { id: 8, name: 'APPLE 6S', price: '1000' }
      ]
    }
  ];
 

  private panier = [];
 
  constructor() { }
 
  getProduits() {
    return this.data;
  }
 
  getPanier() {
    return this.panier;
  }
 
  addProduit(produit) {
    this.panier.push(produit);
  }

}
