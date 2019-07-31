import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private data = [
    {
      //shop:'Amadoushop',
      //category: 'Pizza',
      //expanded: true,
      /**
       * products: [
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
    }
  ];
       */
      products: [
        { id: 0, nomProduit: 'tricot', image: '/assets/img/orange.png', prixPubliProduit: '3000' },
        { id: 1, nomProduit: 'chemise', prixPubliProduit: '3000' },
        { id: 2, nomProduit: 'veste', prixPubliProduit: '3000' },
        { id: 3, nomProduit: 't-shirt', prixPubliProduit: '3000' },
        { id: 4, nomProduit: 'basket', prixPubliProduit: '3000' },
        { id: 5, nomProduit: 'balerie', prixPubliProduit: '3000' },
        { id: 6, nomProduit: 'velo', prixPubliProduit: '3000' },
        { id: 7, nomProduit: 'ordinateur', prixPubliProduit: '3000' },
        { id: 8, nomProduit: 'Ceaser', prixPubliProduit: '3000' }
      ]
    },
    /*{
      shop:'Ericshop',
      category: 'Pasta',
      products: [
        { id: 4, name: 'Mac & Cheese', price: '8' },
        { id: 5, name: 'Bolognese', price: '6' }
      ]
    },
    {
      //shop:'Francisshop',
     // category: 'Salad',
      products: [
        { id: 6, name: 'Ham & Egg', price: '8' },
        { id: 7, name: 'Basic', price: '5' },
        { id: 8, name: 'Ceaser', price: '9' }
      ]
    } */
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }

}
