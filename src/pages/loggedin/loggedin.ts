import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { IncidenciasPage } from '../incidencias/incidencias';
import { PlayasPage } from '../playas/playas';

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  email: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private fire: AngularFireAuth) {
    this.email = fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }
  incidencias() {
    this.navCtrl.push(IncidenciasPage);
  }
  playas() {
    this.navCtrl.push(PlayasPage);
  }

}
