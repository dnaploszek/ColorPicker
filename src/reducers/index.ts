import { combineReducers } from 'redux';

import autoSuggest, { AutoSuggestState } from './autoSuggest';
import colors, { ColorsState } from './colors';

export interface AppState {
  autoSuggest: AutoSuggestState;
  colors: ColorsState;
}

export default combineReducers({
  autoSuggest,
  colors
});
