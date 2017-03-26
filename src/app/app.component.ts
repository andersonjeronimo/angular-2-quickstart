import { Component } from '@angular/core';

@Component({
  selector: 'app',  
  template: `
  <h1>{{title}}</h1>
  <ul class="nav nav-tabs">
    <li role="presentation"><a href="#" routerLink="/dashboard">Dashboard</a></li>
    <li role="presentation" class="active"><a href="#" routerLink="/heroes">X-Men</a></li>        
  </ul>   
   <router-outlet></router-outlet>
   `
})
export class AppComponent {
  title: string = 'Super Heróis Marvel'; 
}
