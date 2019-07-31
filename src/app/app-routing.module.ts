import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  //{
    //path: '',
    //redirectTo: 'boutiques',
    //pathMatch: 'full'
  //},
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },  
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  
//  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule', canActivate: [AuthGuard] },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'home', loadChildren: './pages/boutiques/boutiques.module#BoutiquesPageModule', canActivate: [AuthGuard] },
  //{ path: 'list', loadChildren: './list/list.module#ListPageModule', canActivate: [AuthGuard] },
  { path: '',  redirectTo: 'landing', pathMatch: 'full' }, 
  { path: 'home',
  
   children: [
     {
       path: '',
       loadChildren: './pages/boutiques/boutiques.module#BoutiquesPageModule',
     },
     {
       path: ':boutiqueId',
       loadChildren: './pages/boutique/boutique.module#BoutiquePageModule'

     }
   ] 
  }, 
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule', },
  { path: 'boutiques',
  
   children: [
     {
       path: '',
       loadChildren: './pages/boutiques/boutiques.module#BoutiquesPageModule',
     },
     {
       path: ':boutiqueId',
       loadChildren: './pages/boutique/boutique.module#BoutiquePageModule'

     }
   ] 
  },
  { path: 'produits', loadChildren: './pages/produits/produits.module#ProduitsPageModule' },
  
  { path: 'panier', loadChildren: './pages/panier/panier.module#PanierPageModule' },
  { path: 'connexion', loadChildren: './pages/connexion/connexion.module#ConnexionPageModule' },
  { path: 'inscription', loadChildren: './pages/inscription/inscription.module#InscriptionPageModule' },
  { path: 'shops', loadChildren: './pages/shops/shops.module#ShopsPageModule' },
  { path: 'produit-details', loadChildren: './pages/produit-details/produit-details.module#ProduitDetailsPageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  { path: 'payments', loadChildren: './pages/payments/payments.module#PaymentsPageModule' },
  { path: 'livraison', loadChildren: './pages/livraison/livraison.module#LivraisonPageModule' },
  { path: 'shop', loadChildren: './pages/shop/shop.module#ShopPageModule' },
  { path: 'produit', loadChildren: './pages/produit/produit.module#ProduitPageModule' },
  { path: 'commander', loadChildren: './pages/commander/commander.module#CommanderPageModule' },
  { path: 'resultat', loadChildren: './pages/resultat/resultat.module#ResultatPageModule' },
  { path: 'compte', loadChildren: './pages/compte/compte.module#ComptePageModule' },
  { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
  { path: 'promotions', loadChildren: './pages/promotions/promotions.module#PromotionsPageModule' },
  { path: 'commandes', loadChildren: './pages/commandes/commandes.module#CommandesPageModule' },
  { path: 'historiqueachats', loadChildren: './pages/historiqueachats/historiqueachats.module#HistoriqueachatsPageModule' },
  { path: 'portefeuille', loadChildren: './pages/portefeuille/portefeuille.module#PortefeuillePageModule' },
  { path: 'recompenses', loadChildren: './pages/recompenses/recompenses.module#RecompensesPageModule' },
  { path: 'assistance', loadChildren: './pages/assistance/assistance.module#AssistancePageModule' },
  { path: 'paypal', loadChildren: './pages/paypal/paypal.module#PaypalPageModule' },
  { path: 'momo', loadChildren: './pages/momo/momo.module#MomoPageModule' },
  { path: 'facture', loadChildren: './pages/facture/facture.module#FacturePageModule' },
  { path: 'favories', loadChildren: './pages/favories/favories.module#FavoriesPageModule' },
  { path: 'auth', loadChildren: './pages/auth/auth.module#AuthPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/authen/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './pages/authen/login/login.module#LoginPageModule' },
  //{ path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  //{ path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  //{ path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  //{ path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },


];

/**
 * Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'boutiques', loadChildren: './pages/boutiques/boutiques.module#BoutiquesPageModule' },
  { path: 'produits', loadChildren: './pages/produits/produits.module#ProduitsPageModule' },
  { path: 'produit', loadChildren: './pages/produit/produit.module#ProduitPageModule' },
  { path: 'boutique', loadChildren: './pages/boutique/boutique.module#BoutiquePageModule' },
  { path: 'panier', loadChildren: './pages/panier/panier.module#PanierPageModule' },
  { path: 'connexion', loadChildren: './pages/connexion/connexion.module#ConnexionPageModule' },
  { path: 'inscription', loadChildren: './pages/inscription/inscription.module#InscriptionPageModule' },
  { path: 'shops', loadChildren: './pages/shops/shops.module#ShopsPageModule' },
  { path: 'produit-details', loadChildren: './pages/produit-details/produit-details.module#ProduitDetailsPageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  { path: 'payments', loadChildren: './pages/payments/payments.module#PaymentsPageModule' },
  { path: 'livraison', loadChildren: './pages/livraison/livraison.module#LivraisonPageModule' },
  { path: 'shop', loadChildren: './pages/shop/shop.module#ShopPageModule' },
  { path: 'produit', loadChildren: './pages/produit/produit.module#ProduitPageModule' },
];
 */

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
