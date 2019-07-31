import { Component } from '@angular/core';

import { Platform, AlertController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Boutiques',
      url: '/boutiques',
      icon: 'list'
    },
    {
      title: 'Notifications',
      url: '/notifications',
      icon: 'notifications'
    },
    {
      title: 'Panier',
      url: '/cart',
      icon: 'cart'
    },
    {
      title: 'Historique-Achat',
      url: '/commandes',
      icon: 'reorder'
    },
    {
      title: 'Portefeuille',
      url: '/portefeuille',
      icon: 'cash'
    },
    {
      title: 'Recompenses',
      url: '/recompenses',
      icon: 'trophy'
    },
    {
      title: 'Promotions',
      url: '/promotions',
      icon: 'basket'
    },
    {
      title: 'Assistance',
      url: '/assistance',
      icon: 'people'
    },
    {
      title: 'Parametres',
      url: '/parametres',
      icon: 'settings'
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    //private authService:AuthentificationService,
    private oneSignal: OneSignal,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    //  this.connexion();
   // if (this.platform.is('cordova')) {
     // this.setupPush();
    //}
    });
  }
 /**
  * 
  * @param title  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('YOUR ONESIGNAL APP ID', 'YOUR ANDROID ID');
 
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
 
    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });
 
    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;
 
      this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });
 
    this.oneSignal.endInit();
  }
  * @param msg 
  * @param task 
  */
  
  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    })
    alert.present();
  }
  // When Logout Button is pressed 
  logout() {
    this.authService.logout().subscribe(
      data => {
        this.alertService.presentToast(data['message']);        
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/landing');
      }
    );
  }
  //private connexion() {
   // let authenticated=this.authService.loadToken();
    //if(authenticated){
      //this.router.navigateByUrl('/home')
    //}
    //else
    //this.router.navigateByUrl('/connexion');
  //}
  //onAppPagesItem(appPages){
    //if(appPages.url=='deconnexion'){
      //this.authService.deconnexion();
      //this.router.navigateByUrl("/connexion");
   // }
    //else{
     // this.router.navigateByUrl(appPages.url);
    //}
  //}
}
