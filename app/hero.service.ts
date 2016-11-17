//We create a reusable service to manage our hero data calls
import { Injectable }    from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';//There are scores of operators like toPromise that extend Observable with useful capabilities. If we want those capabilities, we have to add the operators ourselves. 

import { Hero } from './hero';

@Injectable()//Notice that we imported the Angular Injectable function and applied that function as an @Injectable() decorator. TypeScript sees the @Injectable() decorator and emits metadata about our service, metadata that Angular may need to inject other dependencies into this service.


export class HeroService {// We'll have to wait for the server to respond and we won't be able to block the UI while we wait. That is why  Hero Service makes a Promise. 

  private headers = new Headers({'Content-Type': 'application/json'});

  private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }//The constructor is for simple initializations. Here it initializes the access HTTP. 

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {// method that filters the heroes list from getHeroes by id:
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}


//The consumer of our service doesn't know how the service gets the data. Our HeroService could get Hero data from anywhere. It could get the data from a web service or local storage or from a mock data source.
//Each Http service method returns an Observable of HTTP Response objects. An observable is a stream of events that we can process with array-like operators.
// Our HeroService converts that Observable into a Promise and returns the promise to the caller.

 //the @Injectable() decorator and emits metadata about our service, metadata that Angular may need to inject other dependencies into this service.






