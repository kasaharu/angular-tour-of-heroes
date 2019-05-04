import { TestBed } from '@angular/core/testing';

import { HeroDetailService } from './hero-detail.service';

describe('HeroDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroDetailService = TestBed.get(HeroDetailService);
    expect(service).toBeTruthy();
  });
});
