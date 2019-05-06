import { TestBed } from '@angular/core/testing';

import { HeroQuery } from './hero.query';

describe('HeroQuery', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroQuery = TestBed.get(HeroQuery);
    expect(service).toBeTruthy();
  });
});
