import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { HeroRepository } from '../repositories/hero.repository';
import { HeroStoreActions } from '../store/root/hero-store';

@Injectable({
  providedIn: 'root',
})
export class HeroesUsecase {
  constructor(private store$: Store<{}>, private heroRepository: HeroRepository) {}

  async initialize() {
    const result = await this.heroRepository.getHeroes().toPromise();
    this.store$.dispatch(HeroStoreActions.fetchHeroes(result));
  }
}
