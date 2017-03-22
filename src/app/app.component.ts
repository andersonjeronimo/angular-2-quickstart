import { Component } from '@angular/core';

@Component({
  selector: 'my-app',  
  template: `
  <h1>{{title}}</h1>
  <ul class="nav nav-tabs">
    <li role="presentation" class="active"><a href="#" routerLink="/heroes">X-Men</a></li>
    <li role="presentation"><a href="#" routerLink="/dashboard">DashBoard</a></li>    
  </ul>   
   <router-outlet></router-outlet>
   `
})
export class AppComponent {
  title: string = 'Marvel Super Heroes'; 
}
