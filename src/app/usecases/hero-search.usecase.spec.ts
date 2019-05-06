import { TestBed } from '@angular/core/testing';

import { HeroSearchUsecase } from './hero-search.usecase';

describe('HeroSearchUsecase', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroSearchUsecase = TestBed.get(HeroSearchUsecase);
    expect(service).toBeTruthy();
  });
});
