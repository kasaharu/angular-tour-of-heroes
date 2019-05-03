import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Hero } from '../hero';
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

  async addHero(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }

    await this.heroRepository.addHero({ name } as Hero).subscribe();
    const result = await this.heroRepository.getHeroes().toPromise();
    this.store$.dispatch(HeroStoreActions.fetchHeroes(result));
  }
}
