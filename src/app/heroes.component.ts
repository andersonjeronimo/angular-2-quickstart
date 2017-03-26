import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'heroes',
  template: `
    <div>
      <label>Hero name:</label>
      <input #heroName />
      <button class="btn btn-success" (click)="add(heroName.value); heroName.value=''">Add</button>
    </div>

    <ul class="list-group">
      <li class="list-group-item" *ngFor="let hero of heroes" [class.active]="hero === selectedHero" (click)="onSelect(hero)">
        <button class="btn btn-danger" (click)="delete(hero); $event.stopPropagation()">Delete</button>
        <button class="btn btn-info" (click)="gotoDetail(hero)">Details</button>
        {{hero.name}}                       
      </li>
    </ul>
    <!--hero-detail [hero]="selectedHero"></hero-detail-->
  `,
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }



  gotoDetail(hero:Hero): void {
    this.router.navigate(['/detail', hero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}