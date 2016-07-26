import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService
{
    getHeroes() : Promise<Hero[]>
    {
        return Promise.resolve(HEROES);
    }
    
    getHeroesSlowly() : Promise<Hero[]>
    {
        let wRetardedPromise : Promise<Hero[]>;
        
        wRetardedPromise = new Promise<Hero[]>( resolve => setTimeout(() => resolve(HEROES), 2000));
        
        return wRetardedPromise;
    }
    
}