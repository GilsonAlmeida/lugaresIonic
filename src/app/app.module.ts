import { LugaresService } from './../services/lugares';
import { ObtemLocalizacaoPage } from './../pages/obtem-localizacao/obtem-localizacao';
import { AdicionaLugarPage } from './../pages/adiciona-lugar/adiciona-lugar';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AgmCoreModule } from "angular2-google-maps/core";

import { Geolocation} from "@ionic-native/geolocation";
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from "@ionic-native/camera";
import { File} from "@ionic-native/file";


class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("http://gamehall.uol.com.br/v10/wp-content/uploads/2016/06/07-1.jpg");
    })
  }
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdicionaLugarPage,
    ObtemLocalizacaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     IonicStorageModule.forRoot(),
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAC8_YbqShCeXy5rtUJtiA2ojuQIREWht8'
})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdicionaLugarPage,
    ObtemLocalizacaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: Camera, useClass: CameraMock },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     Geolocation,File,LugaresService

  ]
})
export class AppModule {}
