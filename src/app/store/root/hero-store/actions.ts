import { createAction, union } from '@ngrx/store';
import { Hero } from '../../../hero';

export const fetchHeroes = createAction('[Hero] Fetch Heroes', (payload: Hero[]) => ({ payload }));
const actions = union({ fetchHeroes });

export type ActionsUnion = typeof actions;
