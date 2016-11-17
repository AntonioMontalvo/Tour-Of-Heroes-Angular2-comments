import { Component } from '@angular/core';

@Component({//We create metadata with the @Component decorator
  moduleId: module.id,
  selector: 'my-app',// a selector that specifies a simple CSS selector for an HTML element that represents the Component.
  template: //a template that tells Angular how to render the component's view. T 
  `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})

export class AppComponent {//You export the AppComponent class so that you can import it into the application that you just created.
  title = 'Tour of Heroes';
}


// The Angular Router provides a routerLinkActive directive we can use to add a class to the HTML navigation element whose route matches the active route. All we have to do is define the style for it. 









 