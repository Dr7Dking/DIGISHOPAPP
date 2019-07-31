import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Boutique } from '../boutiques/boutique.model';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.page.html',
  styleUrls: ['./shops.page.scss'],
})
export class ShopsPage{

  
  constructor(private router: Router, private navController: NavController ) { }

  cart = [];
  items = [];
  
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  
        ngOnInit(){
        
        }




 
  openCart() {
    this.router.navigate(['cart']);
  }
  
  openHome() {
    this.router.navigate(['home']);
  }

  openReglages() {
    this.router.navigate(['reglages']);
  }
  openAccount() {
    this.router.navigate(['account']);
  }
  openSwitch() {
    this.router.navigate(['switch']);
  }
  openShops() {
    this.router.navigate(['shops']);
  }
  




  
   /**
    * @name boutiques
    * @type {Array}
    * @public
    * @description     Array for holding individual object data of boutiques
    */
   public boutiques : Array<any>;







   /**
    * Triggered when template view has completed loading
    *
    * @public
    * @method ionViewDidLoad
    * @return {None}
    */
   ionViewDidLoad()
   {
      this.declareBoutiques();
   }




   /**
    * Populates the technologies array with different technologies
    *
    * @public
    * @method declareBoutiques
    * @return {None}
    */
   declareBoutiques() : void
   {
       this.boutiques = [
         {
         "idBoutique":1,
         "nomBoutique":"adamou shop",
         "adressBoutique":"yaounde",
         "emailBoutique":"fokou@gmail.com",
         "telephoneBoutique":6584552,
         "image":"assets/img/3.png",
         "description":"vetement"
        },
        {
          "idBoutique":2,
          "nomBoutique":"nana shop",
          "adressBoutique":"bertoir",
          "emailBoutique":"nana@gmail.com",
          "telephoneBoutique":6584552,
          "image":"assets/img/5.png",
          "description":"vetement"
        },
        {
          "idBoutique":3,
          "nomBoutique":"eric shop",
          "adressBoutique":"yagoua",
          "emailBoutique":"eric@gmail.com",
          "telephoneBoutique":6584552,
          "image":"assets/img/4.png",
          "description":"vetement"
        },
        {"idBoutique":4,
        "nomBoutique":"adam shop",
        "adressBoutique":"yaounde",
        "emailBoutique":"fokou@gmail.com",
        "telephoneBoutique":65848552,
        "image":"assets/img/3.png",
        "description":"vetement"
      },
      {"idBoutique":5,
      "nomBoutique":"adamu shop",
      "adressBoutique":"yaounde",
      "emailBoutique":"fokou@gmail.com",
      "telephoneBoutique":65884552,
      "image":"assets/img/5.png",
      "description":"vetement"
    },
    {"idBoutique":6,
    "nomBoutique":"adamo shop",
    "adressBoutique":"yaounde",
    "emailBoutique":"fokou@gmail.com",
    "telephoneBoutique":65848552,
    "image":"assets/img/4.png",
    "description":"vetement"
    },
    {
      "idBoutique":7,
      "nomBoutique":"adou shop",
      "adressBoutique":"yaounde",
      "emailBoutique":"fokou@gmail.com",
      "telephoneBoutique":65847552,
      "image":"assets/img/3.png",
      "description":"vetement"
    },
    {
      "idBoutique":8,
      "nomBoutique":"adau shop",
      "adressBoutique":"yaounde",
      "emailBoutique":"fokou@gmail.com",
      "telephoneBoutique":65840552,
      "image":"assets/img/5.png",
      "description":"vetement"
    },
    {
      "idBoutique":9,
      "nomBoutique":"amou shop",
      "adressBoutique":"yaounde",
      "emailBoutique":"fokou@gmail.com",
      "telephoneBoutique":658450052,
      "image":"assets/img/4.png",
      "description":"vetement"
    },
    {
      "idBoutique":10,
      "nomBoutique":"amou shop",
      "adressBoutique":"yaounde",
      "emailBoutique":"fokou@gmail.com",
      "telephoneBoutique":65845052,
      "image":"assets/img/3.png",
      "description":"vetement"
    },
    {
      "idBoutique":11,
      "nomBoutique":"obamafashon",
      "adressBoutique":"douala",
      "emailBoutique":"fokou@gmail.com",
      "telephoneBoutique":78222,
      "image":"assets/img/4.png",
      "description":"vetement"
    }
  ];
    }



   /**
    * Filter technologies array by keyword/letter
    *
    * @public
    * @method filterboutiques
    @ param event     {Object}		The event object emitted by the <ion-searchbar> when input is entered
    * @return {None}
    */
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




   /**
    * Filter technologies array by type selected
    *
    * @public
    * @method onFilter
    @ param val     {String}		The string value supplied by the <ion-radio> when selected
    * @return {None}
    */
   onFilter(category : string) : void
   {
      this.declareBoutiques();

      // Only filter the technologies array IF the selection is NOT equal to value of all
      if (category.trim() !== 'all')
      {
         this.boutiques = this.boutiques.filter((item) =>
         {
           return item.type.toLowerCase().indexOf(category.toLowerCase()) > -1;
         })
      }
   }

}
