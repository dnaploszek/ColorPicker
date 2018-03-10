import { AutoSuggestAction, AutoSuggestActionsEnum, } from '../actions/autoSuggest';

export type AutoSuggestState = string;

const initialState = '';

const autoSuggest = (state: AutoSuggestState = initialState, action: AutoSuggestAction): AutoSuggestState => {
  switch (action.type) {
    case AutoSuggestActionsEnum.CHANGE_TEXT:
      return action.fieldValue;
    default:
      return state;
  }
};

export default autoSuggest;