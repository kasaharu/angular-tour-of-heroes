import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { selectFeatureHeroes, selectFeatureSearchedHeroes, selectFeatureSelectedHero } from '../store/root/hero-store/state';

@Injectable({
  providedIn: 'root',
})
export class HeroQuery {
  readonly heroes$ = this.store$.pipe(select(selectFeatureHeroes));
  readonly selectedHero$ = this.store$.pipe(select(selectFeatureSelectedHero));
  readonly topHeroes$ = this.store$.pipe(select(selectFeatureHeroes)).pipe(map((heroes) => (heroes ? heroes.slice(1, 5) : heroes)));
  readonly searchedHeroes$ = this.store$.pipe(select(selectFeatureSearchedHeroes));

  constructor(private store$: Store<{}>) {}
}
