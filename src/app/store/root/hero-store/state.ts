import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Hero } from '../../../hero';

export interface State {
  heroes: Hero[] | null;
  selectedHero: Hero | null;
  searchedHeroes: Hero[] | null;
}

export const initialState: State = {
  heroes: null,
  selectedHero: null,
  searchedHeroes: null,
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
export const selectFeatureSearchedHeroes = createSelector(
  selectFeature,
  (state: State) => state.searchedHeroes,
);
