import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  template:`  
  <h1>{{title}}</h1>     
  <ul class="nav nav-pills nav-justified">
    <li *ngFor="let hero of heroes" [class.active]="hero === selectedHero" (click)="onSelect(hero)" class="list-group-item">     
      {{hero.name}}
    </li>    
  </ul>
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>  
  `,
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {   
  heroes: Hero[];  
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }
  
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }  

}