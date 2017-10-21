import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeoProvider } from '../../providers/geo/geo';
import { Profile } from '../../models/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: any;

  constructor(public navCtrl: NavController, public geo: GeoProvider) {
    this.user = new Profile('Shamansha Chiang','shamansha@NiceButt.com',
      '6159999999','Nashville','TN');
  }

  explore() {
    this.navCtrl.push('FiltersPage',
      {longitude: this.geo.longitude,
              latitude: this.geo.latitude});
  }

  filter() {
    this.navCtrl.push('FiltersPage');
  }

}
