import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { HeroRepository } from '../repositories/hero.repository';
import { HeroStoreActions } from '../store/root/hero-store';

@Injectable({
  providedIn: 'root',
})
export class HeroSearchUsecase {
  constructor(private store$: Store<{}>, private heroRepository: HeroRepository) {}

  async search(term: string) {
    const result = await this.heroRepository.searchHero(term).toPromise();
    this.store$.dispatch(HeroStoreActions.searchHeroes(result));
  }
}
