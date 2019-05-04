import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../../hero';
import { HeroQuery } from '../../queries/hero.query';
import { HeroDetailUsecase } from '../../usecases/hero-detail.usecase';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero$ = this.heroQuery.selectedHero$;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroQuery: HeroQuery,
    private usecase: HeroDetailUsecase,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((pmap) => this.getHero(+pmap.get('id')));
  }

  getHero(id: number) {
    this.usecase.selectHero(id);
  }

  goBack(): void {
    this.location.back();
  }

  save(hero: Hero): void {
    this.usecase.updateSelectedHero(hero);
    this.goBack();
  }
}
