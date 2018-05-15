import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-incidencias',
  templateUrl: 'incidencias.html',
})
export class IncidenciasPage {

  @ViewChild('email') mail;
  @ViewChild('incidencia') incidencia;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncidenciasPage');
  }

}
