import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';


export class Hero {
    id: number;
    name: string;
}


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})



export class AppComponent {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    constructor(private heroService: HeroService) {}
    getHeroes(): void {
        this.heroService.getHeroes().then((heroes) => this.heroes = heroes);
    }
    ngOnInit(): void {
        this.getHeroes();
    }
};
