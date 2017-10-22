import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
/*
  Generated class for the GoogleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoogleProvider {

  google_response:any;
  url:string = "https://www.google.com/maps/dir/?api=1";


  constructor(public http: Http) {
    console.log('Hello GoogleProvider Provider');
  }
  get (latitude:number, longitude:number, destination:string, travelmode?:string) {
    let location = encodeURI(latitude+","+longitude);
    travelmode = encodeURI(travelmode);
    destination = encodeURI(destination);

    this.url = this.url + "&"

    let opts = new RequestOptions();
    opts.params.set("origin", location);
    opts.params.set("destination", destination);
    opts.params.set("travelmode", travelmode);
    return this.http.get(this.url, opts).subscribe(
      res => this.google_response,
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`));
  }



}
