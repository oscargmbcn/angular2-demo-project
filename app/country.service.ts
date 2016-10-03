import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Country } from './country';

@Injectable()
export class CountryService {

  private countriesURL = 'https://restcountries.eu/rest/v1/all';

  getCountries(): Promise<Country[]> {
    return this.http.get(this.countriesURL).toPromise().then(response => response.json() as Country[]).catch(this.handleError);
    }

    constructor(private http: Http) {

    }
}
