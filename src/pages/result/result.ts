import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YelpProvider } from '../../providers/yelp/yelp';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  longitude: number;
  latitude: number;
  walking: boolean;
  term: string;
  price: number;

  response: any;

  selected: any;
  name: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private yelp: YelpProvider) {
    // this.longitude = this.navParams.get("longitude");
    // this.latitude = this.navParams.get("latitude");
    // this.walking = this.navParams.get("walking");
    // this.term = this.navParams.get("term");
    // this.price = this.navParams.get("price");
    this.longitude = -86.7816;
    this.latitude = 36.1627;
    this.walking = true;
    this.term = "dinner";
    this.price = 2;
    this.search();
  }

  search() {
    let radius;
    if (this.walking) {
      radius = 1600;
    } else {
      radius = 40000;
    }
    this.yelp.get(this.latitude, this.longitude, radius, this.term, this.price).subscribe(
      res => {
        this.response = res.json();
        this.selectRestaurant(this.response);
      },
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`));
  }

  selectRestaurant(response: any) {
    let list:Array<any> = response["businesses"];
    if (response["total"] == 0) {

    } else {
      let index = Math.floor(Math.random() * response["total"]) + 1;
      this.selected = list[index];
      this.name = this.selected.name;
      console.log(JSON.stringify(this.selected));
    }
  }

}
