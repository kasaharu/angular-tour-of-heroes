import { Component, OnInit } from '@angular/core';

import { HeroQuery } from '../../queries/hero.query';
import { DashboardUsecase } from '../../usecases/dashboard.usecase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes$ = this.heroQuery.topHeroes$;

  constructor(private heroQuery: HeroQuery, private usecase: DashboardUsecase) {}

  ngOnInit() {
    this.usecase.initialize();
  }
}
