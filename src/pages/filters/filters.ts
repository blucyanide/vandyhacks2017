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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.longitude = this.navParams.get("longitude");
    this.latitude = this.navParams.get("latitude");
  }

  explore() {
    this.navCtrl.push('ResultPage', {});
  }

}
