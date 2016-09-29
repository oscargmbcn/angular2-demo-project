import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
//  directives: [HeroDetailComponent],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {

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
    this.heroService.getHeroes().then(rHeroes => this.heroes = rHeroes);
    //this.heroService.getHeroesSlowly().then(rHeroes => this.heroes = rHeroes);
  }

  ngOnInit() : void
  {
    this.getHeroes();
  }
}
