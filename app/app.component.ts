import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  
  title = 'Tour of Heroes';
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }
  
  onSelect(hero: Hero) : void
  {
    this.selectedHero = hero;
  }
  
  heroes: Hero[];

  getHeroes() : void
  {
    //this.heroes = this.heroService.getHeroes();
    //this.heroService.getHeroes().then(rHeroes => this.heroes = rHeroes);
    this.heroService.getHeroesSlowly().then(rHeroes => this.heroes = rHeroes);
  }
  
  ngOnInit() : void
  {
    this.getHeroes();
  }
}