import 'rxjs/add/operator/switchMap';
//We'll  import the switchMap operator to use later with the route parameters Observable.

import { Component, OnInit }      from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';//The ActivatedRoute contains all the information you need from the current route component as well as ways to get information about other activated routes in the RouterState.

import { Location }               from '@angular/common';

import { Hero }        from './hero';

import { HeroService } from './hero.service';
//Let's have the ActivatedRoute service, the HeroService and the Location service injected into the constructor, saving their values in private fields:

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: [ 'hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit {//tell the class we want to implement the OnInit interface

  hero: Hero; //the hero property

  constructor(//The constructor add members to the class an sets them as private. They cannot be accessed from outside the class
    private heroService: HeroService,
    private route: ActivatedRoute,//look the route is here
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params//the route
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  save(): void {//The save method persists hero name changes using the hero service update method and then navigates back to the previous view.
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
  
  goBack(): void {//method that navigates backward one step in the browser's history stack using the Location service we injected previously.
    this.location.back();
  }
}

//Note how the switchMap operator maps the id in the observable route parameters to a new Observable, the result of the HeroService.getHero method.

// If the user re-navigates to this component while a getHero request is still inflight, switchMap cancels that old request before calling HeroService.getHero again.

// The hero id is a number. Route parameters are always strings. So we convert the route parameter value to a number with the JavaScript (+) operator.