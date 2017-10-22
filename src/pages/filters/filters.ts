import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeoProvider } from '../../providers/geo/geo'

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
  city: string;
  walking: boolean;
  term: string;
  price: number;

  color: string = "#ffdd7a";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private  geo: GeoProvider) {
    this.longitude = this.navParams.get("longitude");
    this.latitude = this.navParams.get("latitude");
    geo.getcity(this.latitude, this.longitude);
    this.city = this.geo.city;
  }

  explore() {
    this.navCtrl.push('ResultPage',
      {longitude: this.longitude,
        latitude: this.latitude,
        city: this.city,
        walking: this.walking,
        term: this.term,
        price: this.price});
  }

  changeColor() {
    //let x = document.getElementById("transport_container");
    if (this.color === "#ffdd7a") {
      this.color = "#ffb75c";
    } else {
      this.color = "#ffdd7a";
    }
  }
}

