import { Injectable }     from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } 	  from 'rxjs';

import { Hero }           from './hero';

@Injectable()

export class HeroSearchService {

  constructor(private http: Http) {} //The constructor is for simple initializations 

  search(term: string): Observable<Hero[]> {//Each Http service method returns an Observable of HTTP Response objects.
    return this.http
               .get(`app/heroes/?name=${term}`)
               .map((r: Response) => r.json().data as Hero[]);
  }
}
//We add a hero search feature to the Tour of Heroes. As the user types a name into a search box, we'll make repeated HTTP requests for heroes filtered by that name.


