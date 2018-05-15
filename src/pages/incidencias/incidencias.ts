import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-incidencias',
  templateUrl: 'incidencias.html',
})
export class IncidenciasPage {

  @ViewChild('email') mail;
  @ViewChild('incidencia') incidencia;

  incidenciaRef: AngularFireList<any>;
  inci: Observable<any[]>;
  correo: string;
  texto: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public database: AngularFireDatabase
  ) {
    this.incidenciaRef = this.database.list('inciden');
    this.inci = this.incidenciaRef.snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncidenciasPage');
  }

  anadirIncidencia(){

    this.correo = this.mail.val;
    console.log('correo ', this.correo);

   this.texto = this.incidencia.val;
    console.log('texto ', this.texto);

    data => {
      data.incidenciaRef.push({
        correo: data.correo,
      incidencia: data.texto
      })
    }
    
   /* data => {
      this.incidenciaRef.push({
        incidencia data.title,
        done: false
        
      });
    }*/
  }

}
