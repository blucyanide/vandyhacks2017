import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the YelpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YelpProvider {

  response:any;
  access_token:string = "Lvn4KzYJD5hYXR_X08yYLOOhOqyeckfi4MRclBt782QyJ87pzksNCXzSpLNaH4s2Wq3L_oMruI-oRD27" +
    "uiwoQpQPxJECALT6AaNfDhrNbazg_dQ6LcDv0NDcaZnrWXYx";
  url:string = "https://api.yelp.com/v3/businesses/search";
  constructor(public http: Http) {
    console.log('Hello YelpProvider Provider');
  }

  get (latitude:number, longitude:number, radius ?:number, term ?:string, price ?:string) {
    let headers = new Headers();
    headers.append('Authorization', btoa(this.access_token));
    let opts = new RequestOptions();
    opts.headers = headers;
    opts.params.set('cll', latitude + ',' + longitude);
    if (radius !== undefined) {
      opts.params.set('radius', radius.toString(radius));
    }
    if (term !== undefined) {
      opts.params.set('term', term);
    }
    if (price !== undefined) {
      opts.params.set('price', price);
    }

    return this.http.get(this.url, opts).subscribe(
      res => this.response,
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`));

  }

}
