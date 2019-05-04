import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { HeroRepository } from '../repositories/hero.repository';
import { HeroStoreActions } from '../store/root/hero-store';

@Injectable({
  providedIn: 'root',
})
export class HeroDetailUsecase {
  constructor(private store$: Store<{}>, private heroRepository: HeroRepository) {}

  async selectHero(heroId: number) {
    const result = await this.heroRepository.getHero(heroId).toPromise();
    this.store$.dispatch(HeroStoreActions.selectHero(result));
  }
}
