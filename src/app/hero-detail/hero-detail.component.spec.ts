import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpyLocation } from '@angular/common/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { HeroService } from '../hero.service';
import { ActivatedRouteStub } from '../testing/activated-route-stub';
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let activatedRouteStub = new ActivatedRouteStub({});
  let location = new SpyLocation();
  let heroService: HeroService;
  let testHero = { id: 11, name: 'Mr. Nice' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [HeroDetailComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }, { provide: Location, useValue: location }],
    }).compileComponents();

    heroService = TestBed.get(HeroService);
  }));

  beforeEach(() => {
    activatedRouteStub.setParamMap({ id: testHero.id });
    spyOn(heroService, 'getHero').and.returnValue(of(testHero));

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set Hero', () => {
    expect(component.hero).toEqual(testHero);
  });

  it('call goBack() method', () => {
    location.go('/path1');
    location.go('/path2');
    component.goBack();

    expect(location.isCurrentPathEqualTo('/path1')).toBe(true);
  });
});
