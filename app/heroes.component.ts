import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private heroService: HeroService) { }

  onSelect(hero: Hero) : void
  {
    //this.selectedHero = hero;
    let link = ['/detail', hero.id];
    this.router.navigate(link);
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
