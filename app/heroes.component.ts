import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
	moduleId: module.id,
    selector: 'my-heroes', //We create metadata with the @Component decorator where we specify the selector name that identifies this component's element.
    templateUrl: 'heroes.component.html',//template is the Component decoration.    
    styleUrls: ['heroes.component.css'],
	
})


export class HeroesComponent implements OnInit{//tell the class we want to implement the OnInit interface
	
  heroes: Hero[];// access the array of heroes
  selectedHero: Hero; //grabbing from the Hero class

  constructor(//The constructor is for simple initializations 
  	private heroService: HeroService,
  	private router: Router) { }//The constructor itself does nothing. The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.

  	getHeroes(): void {//Someday we're going to get heroes from a remote server. We'll have to use some kind of asynchronous technique and that will change the signature of our getHeroes method. We use Promises. We pass our callback function as an argument to the Promise's then method:
  		this.heroService
  			.getHeroes()
  			.then(heroes => this.heroes = heroes);
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



  ngOnInit(): void {//Angular will call the ngOnInit Hook to initialize the component after it displays the data-bound properties and sets the input properties.
  	this.getHeroes();//it calls getHeroes() above.
  }

  onSelect(hero: Hero): void {//method that sets the selectedHero property to the hero the user clicked.
    this.selectedHero = hero;
  }

  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
  }


}

	
//We want the user to select a hero from our list, and have the selected hero appear in the details view. This UI pattern is widely known as "master-detail". In our case, the master is the heroes list and the detail is the selected hero.









