import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class MovieService {
  http: any;
  baseUrl: String;

  constructor(http: Http) {
    this.http = http;
  }

  //////////////////////////////////////////////////////////////////////////////

  getShowtimes() {
    console.log('getShowtimes called');
    return this.http.get('assets/data/showtimes.json')
      .map(res => res.json());
  }

}
