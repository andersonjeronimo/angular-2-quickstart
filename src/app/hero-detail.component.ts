import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template:
  `<div *ngIf="hero">    
    <div>
        <label>Nome: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <div>
      <label>Nome Mutante: </label>
      <strong>{{hero.xname}}</strong>
      <img src={{hero.img_url}} class="img-responsive" alt="Hero Image">
    </div>    
    <div>
      <label>Poderes: </label>
    </div>    
    <ul class="list-group">
        <li *ngFor="let power of hero.powers; let i = index" [attr.data-index]="i" class="list-group-item">            
            {{power}}                
        </li>
    </ul>
  </div>
  `
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}