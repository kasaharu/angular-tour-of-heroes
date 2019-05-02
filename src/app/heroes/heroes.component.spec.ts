import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroService: HeroService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeroesComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    heroService = TestBed.get(HeroService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    component.heroes = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('call add() method', () => {
    it('引数が空でない場合', () => {
      const addingHero: Hero = { id: 1, name: 'test' };
      spyOn(heroService, 'addHero').and.returnValue(of(addingHero));

      component.add('test');
      expect(component.heroes).toEqual([addingHero]);
    });

    it('引数が空の場合', () => {
      const addingHero: Hero = { id: 1, name: 'test' };
      spyOn(heroService, 'addHero').and.returnValue(of(addingHero));

      component.add('');
      expect(component.heroes).toEqual([]);
    });
  });
});
