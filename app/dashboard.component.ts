import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
})

export class DashboardComponent implements OnInit {//tell the class we want to implement the OnInit interface

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }//set  as private and access the HeroService

  ngOnInit(): void {//call the ngOnInit Hook after displaying the data-bound properites and input properties.
    this.heroService.getHeroes()//call getHeroes 
      .then(heroes => this.heroes = heroes.slice(1, 5)); //after we get the JSON data get slice it and put it on the array. 
  }
}
