import { TestBed } from '@angular/core/testing';

import { HeroSearchService } from './hero-search.service';

describe('HeroSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroSearchService = TestBed.get(HeroSearchService);
    expect(service).toBeTruthy();
  });
});
