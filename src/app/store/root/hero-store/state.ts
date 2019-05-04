import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Hero } from '../../../hero';

export interface State {
  heroes: Hero[] | null;
  selectedHero: Hero | null;
}

export const initialState: State = {
  heroes: null,
  selectedHero: null,
};

export const selectFeature = createFeatureSelector<State>('hero');
export const selectFeatureHeroes = createSelector(
  selectFeature,
  (state: State) => state.heroes,
);
export const selectFeatureSelectedHero = createSelector(
  selectFeature,
  (state: State) => state.selectedHero,
);
