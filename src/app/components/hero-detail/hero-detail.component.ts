import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../../hero';
import { HeroQuery } from '../../queries/hero.query';
import { HeroRepository } from '../../repositories/hero.repository';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero$ = this.heroQuery.selectedHero$;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroRepository,
    private location: Location,
    private heroQuery: HeroQuery,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((pmap) => this.getHero(+pmap.get('id')));
  }

  getHero(id: number) {
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  save(hero: Hero): void {
    this.heroService.updateHero(hero).subscribe(() => this.goBack());
  }
}
