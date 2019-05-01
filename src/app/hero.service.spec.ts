import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Hero } from './hero';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;
  let httpTestingController: HttpTestingController;
  const heroesUrl = 'api/heroes';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.get(HeroService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('call getHeroes() method', () => {
    const testHeroes: Hero[] = [{ id: 1, name: 'test' }];

    service.getHeroes().subscribe((result) => expect(result).toEqual(testHeroes));
    const req = httpTestingController.expectOne(heroesUrl);
    expect(req.request.method).toBe('GET');
    req.flush(testHeroes);
  });
});
