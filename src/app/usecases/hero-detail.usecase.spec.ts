import { TestBed } from '@angular/core/testing';

import { HeroDetailUsecase } from './hero-detail.usecase';

describe('HeroDetailUsecase', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroDetailUsecase = TestBed.get(HeroDetailUsecase);
    expect(service).toBeTruthy();
  });
});
