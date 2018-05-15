import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { PlayasPage } from '../pages/playas/playas';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { RegisterPage } from './../pages/register/register';
import { IncidenciasPage } from '../pages/incidencias/incidencias';

const firebaseAuth = {
  apiKey: "AIzaSyDecPLTcBODdn8fU9hUd9VFymsBZjSFaqk",
  authDomain: "proyectogit-53439.firebaseapp.com",
  databaseURL: "https://proyectogit-53439.firebaseio.com",
  projectId: "proyectogit-53439",
  storageBucket: "",
  messagingSenderId: "746709652335"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlayasPage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    IncidenciasPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlayasPage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    IncidenciasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider
  ]
})
export class AppModule {}
