import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.page.html',
  styleUrls: ['./resultat.page.scss'],
})
export class ResultatPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  openHome(){
    this.router.navigate(['home']);
  }
}
