import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@IonicPage()
@Component({
  selector: 'page-playas',
  templateUrl: 'playas.html',
})
export class PlayasPage {

  equipos: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpServiceProvider
  ) {
  }

  ionViewDidLoad() {
    this.httpService.getPlayas()
      .subscribe(
        (data)=>{
          //console.log(data);
          this.equipos = data;
          console.log(this.equipos);
          
        },
        err =>{
          console.error(err);
        }
      )
  }

}
