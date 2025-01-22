import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  standalone: false,
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ))
      )
      .subscribe(  country  => {

        if ( !country ) {
          return this.router.navigateByUrl('');
        }

        console.log('TENEMOS UN PAIS');
        return;
      })
  }

  /* searchCountry( code: string ) {
    this.countriesService.searchCountryByAlphaCode( code )
      .subscribe( country => {
        console.log({ country })
      })
  } */


}
