import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {PayPal} from '@ionic-native/paypal/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { SMS } from '@ionic-native/sms/ngx';
//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';;
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,IonicStorageModule.forRoot(), IonicModule.forRoot(),HttpModule,
  HttpClientModule, AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    PayPal,
    CallNumber,
    FileOpener,
    File,
    SMS,
    NativeStorage,
    //AndroidPermissions,
    //AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, OneSignal, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
