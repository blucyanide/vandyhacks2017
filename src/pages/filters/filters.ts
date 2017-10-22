import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FiltersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})
export class FiltersPage {
  longitude: number;
  latitude: number;
  color: string = "#ffdd7a";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.longitude = this.navParams.get("longitude");
    this.latitude = this.navParams.get("latitude");
  }

  explore() {
    this.navCtrl.push('ResultPage', {});
  }

  changeColor() {
    //let x = document.getElementById("transport_container");
    if (this.color === "#ffdd7a") {
      this.color = "#ffb75c";
    } else {
      this.color = "#ffdd7a";
    }
  }

  hideCar() {
    document.getElementById("transport_car").display = "none";
  }
}

