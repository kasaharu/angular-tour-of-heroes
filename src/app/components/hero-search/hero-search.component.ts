import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { HeroQuery } from '../../queries/hero.query';
import { HeroSearchUsecase } from '../../usecases/hero-search.usecase';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  heroes$ = this.heroQuery.searchedHeroes$;
  private searchTerms = new Subject<string>();

  constructor(private heroQuery: HeroQuery, private usecase: HeroSearchUsecase) {}

  ngOnInit() {
    this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.usecase.search(term)),
      )
      .subscribe();
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
