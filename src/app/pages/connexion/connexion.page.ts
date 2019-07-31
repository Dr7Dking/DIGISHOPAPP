import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(private authService: AuthentificationService, private router:Router) { }

  ngOnInit() {
  }
  connexion(user){
    let res=this.authService.connexion(user.email,user.password);
    if(res==true){
      this.router.navigateByUrl('home')
    }
    console.log(user);
  }  

}
