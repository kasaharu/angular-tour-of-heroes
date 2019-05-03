import { TestBed } from '@angular/core/testing';

import { HeroesUsecase } from './heroes.usecase';

describe('HeroesUsecase', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroesUsecase = TestBed.get(HeroesUsecase);
    expect(service).toBeTruthy();
  });
});
