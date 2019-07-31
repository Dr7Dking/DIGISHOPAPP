import { Component, OnInit } from '@angular/core';
import { MomoService } from 'src/app/services/momo.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-momo',
  templateUrl: './momo.page.html',
  styleUrls: ['./momo.page.scss'],
})
export class MomoPage implements OnInit {
  momo = [];
  
  constructor(private momoService : MomoService, private router: Router, private navController: NavController){
    this.payWithMomo();
  }

  ngOnInit() {
  }
  payWithMomo(){
    this.momoService.payWithMomo().subscribe((data)=>{
        this.momo = data;
    });
}

}