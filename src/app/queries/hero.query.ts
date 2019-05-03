import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectFeatureHeroes } from '../store/root/hero-store/state';

@Injectable({
  providedIn: 'root',
})
export class HeroQuery {
  readonly heroes$ = this.store$.pipe(select(selectFeatureHeroes));

  constructor(private store$: Store<{}>) {}
}
