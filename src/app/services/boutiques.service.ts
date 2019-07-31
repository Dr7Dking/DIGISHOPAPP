import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { Boutique } from '../pages/boutiques/boutique.model';


@Injectable({
  providedIn: 'root'
})
export class BoutiquesService {
  private boutiques: Boutique [] =[
    {
      idBoutique:"r1",
      nomBoutique:"adamou shop",
      adressBoutique:"yaounde",
      emailBoutique:"fokou@gmail.com",
      telephoneBoutique:'numero 6584552',
      image:"assets/img/3.png",
      description:"vetement"
     },
     {
       idBoutique:"r2",
       nomBoutique:"nana shop",
       adressBoutique:"bertoir",
       emailBoutique:"nana@gmail.com",
       telephoneBoutique:'n6584552',
       image:"assets/img/5.png",
       description:"vetement"
     },
     {
       idBoutique:"r3",
       nomBoutique:"eric shop",
       adressBoutique:"yagoua",
       emailBoutique:"eric@gmail.com",
       telephoneBoutique:'n6584552',
       image:"assets/img/4.png",
       description:"vetement"
     },
     {
       idBoutique:"r4",
       nomBoutique:"adam shop",
       adressBoutique:"yaounde",
       emailBoutique:"fokou@gmail.com",
       telephoneBoutique:'n65848552',
       image:"assets/img/3.png",
       description:"vetement"
     },
     {
       idBoutique:"r5",
       nomBoutique:"adamu shop",
       adressBoutique:"yaounde",
       emailBoutique:"fokou@gmail.com",
       telephoneBoutique:'n65884552',
       image:"assets/img/5.png",
       description:"vetement"
      },
      {
       idBoutique:"r6",
       nomBoutique:"adamo shop",
       adressBoutique:"yaounde",
       emailBoutique:"fokou@gmail.com",
       telephoneBoutique:'n65848552',
       image:"assets/img/4.png",
       description:"vetement"
      },
      {
       idBoutique:"r7",
       nomBoutique:"adou shop",
       adressBoutique:"yaounde",
       emailBoutique:"fokou@gmail.com",
       telephoneBoutique:'n65847552',
       image:"assets/img/3.png",
       description:"vetement"    
      },
      {
       idBoutique:"r8",
       nomBoutique:"adau shop",
       adressBoutique:"yaounde",
       emailBoutique:"fokou@gmail.com",
       telephoneBoutique:'n65840552',
       image:"assets/img/5.png",
       description:"vetement" 
      },
      {
       idBoutique:"r9",
       nomBoutique:"amou shop",
       adressBoutique:"yaounde",
       emailBoutique:"fokou@gmail.com",
       telephoneBoutique:'n658450052',
       image:"assets/img/4.png",
       description:"vetement"
      },
      {
       idBoutique:"r10",
       nomBoutique:"amou shop",
       adressBoutique:"yaounde",
       emailBoutique:"fokou@gmail.com",
       telephoneBoutique:'n65845052',
       image:"assets/img/3.png",
       description:"vetement"
      },
      {
       idBoutique:"r11",
       nomBoutique:"obamafashon",
       adressBoutique:"douala",
       emailBoutique:"fokou@gmail.com",
       telephoneBoutique:'n78222',
       image:"assets/img/4.png",
       description:"vetement"
      }
    ]; 
constructor() {
  
     }
getAllBoutiques() {
    return [...this.boutiques];
    }
getBoutique(boutiqueId:string){
    return {
    ...this.boutiques.find(boutique=> {
    return boutique.idBoutique === boutiqueId;
    })
   };
  } 
}
