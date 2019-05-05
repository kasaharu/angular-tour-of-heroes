import * as Actions from './actions';
import { initialState, State } from './state';

export function heroReducer(state: State = initialState, action: Actions.ActionsUnion) {
  switch (action.type) {
    case Actions.fetchHeroes.type: {
      return {
        ...state,
        heroes: action.payload,
      };
    }
    case Actions.selectHero.type: {
      return {
        ...state,
        selectedHero: action.payload,
      };
    }
    case Actions.searchHeroes.type: {
      return {
        ...state,
        searchedHeroes: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
