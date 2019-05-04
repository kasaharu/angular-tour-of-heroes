import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectFeatureHeroes, selectFeatureSelectedHero } from '../store/root/hero-store/state';

@Injectable({
  providedIn: 'root',
})
export class HeroQuery {
  readonly heroes$ = this.store$.pipe(select(selectFeatureHeroes));
  readonly selectedHero$ = this.store$.pipe(select(selectFeatureSelectedHero));

  constructor(private store$: Store<{}>) {}
}
