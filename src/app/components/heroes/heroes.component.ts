import { Component, OnInit } from '@angular/core';

import { Hero } from '../../hero';
import { HeroQuery } from '../../queries/hero.query';
import { HeroRepository } from '../../repositories/hero.repository';
import { HeroesUsecase } from '../../usecases/heroes.usecase';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes$ = this.heroQuery.heroes$;

  constructor(private heroService: HeroRepository, private heroesUsecase: HeroesUsecase, private heroQuery: HeroQuery) {}

  ngOnInit() {
    this.heroesUsecase.initialize();
  }

  add(name: string): void {
    this.heroesUsecase.addHero(name);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
