import { Hero } from '../../../hero';

export interface State {
  heroes: Hero[] | null;
}

export const initialState: State = {
  heroes: null,
};
