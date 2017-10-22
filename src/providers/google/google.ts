import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleProvider {

  url:string = "https://www.google.com/maps/dir/?api=1";
  url2:string = "https://waze.com/ul";


  constructor() {
    console.log('Hello GoogleProvider Provider');
  }
  buildgoogleURL (latitude:number, longitude:number, destination:string, travelmode?:string) {
    let origin = encodeURI(latitude + "," + longitude);
    travelmode = encodeURI(travelmode);
    destination = encodeURI(destination);

    this.url = this.url + "&origin=" + origin + "&destination=" + destination + "&travelmode=" + travelmode;

    return this.url
  }
  buildwazeURL (latitude:number, longitude:number, destination:string) {
    let origin = encodeURI(latitude + "," + longitude);
    this.url2 = this.url2 + "?ll=" + origin + "?q=" + destination;
    return this.url2;
  }
}
