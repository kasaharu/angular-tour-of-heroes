import { createAction, union } from '@ngrx/store';
import { Hero } from '../../../hero';

export const fetchHeroes = createAction('[Hero] Fetch Heroes', (payload: Hero[]) => ({ payload }));
export const selectHero = createAction('[Hero] Select Hero', (payload: Hero) => ({ payload }));
export const searchHeroes = createAction('[Hero] Search Heroes', (payload: Hero[]) => ({ payload }));
const actions = union({ fetchHeroes, selectHero, searchHeroes });

export type ActionsUnion = typeof actions;
