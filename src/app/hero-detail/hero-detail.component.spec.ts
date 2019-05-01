import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let location = new SpyLocation();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [HeroDetailComponent],
      providers: [{ provide: Location, useValue: location }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call goBack() method', () => {
    location.go('/path1');
    location.go('/path2');
    component.goBack();

    expect(location.isCurrentPathEqualTo('/path1')).toBe(true);
  });
});
