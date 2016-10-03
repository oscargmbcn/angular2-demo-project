import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Country } from './country';
import { CountryService } from './country.service';

@Component({
  selector: 'my-countries',
  templateUrl: 'app/countries.component.html',
  styleUrls: ['app/countries.component.css'],
  providers: [CountryService]
})

export class CountriesComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit() : void
  {
    this.getCountries();
  }

  getCountries() : void
  {
    this.countryService.getCountries().then(rCountries => { this.countries = rCountries; });
  }
}
