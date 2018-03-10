import { Color } from '../@types/colors.types';

import {
  AutoSuggestAction, AutoSuggestActionsEnum, AutoSuggestChangeTextAction, AutoSuggestSetHintedColorAction,
} from '../actions/autoSuggest';
import { assignNewState } from '../utils/reduxUtils';

export type AutoSuggestState = {
  inputValue: string;
  hintedColor: Color | undefined;
};

const initialState = {
  inputValue: '',
  hintedColor: undefined,
};

const autoSuggest = (state: AutoSuggestState = initialState, action: AutoSuggestAction): AutoSuggestState => {
  switch (action.type) {
    case AutoSuggestActionsEnum.CHANGE_TEXT:
      return assignNewState(state, {
        inputValue: (action as AutoSuggestChangeTextAction).fieldValue,
        hintedColor: undefined,
      });
    case AutoSuggestActionsEnum.SET_HINTED_COLOR:
      return assignNewState(state, {
        hintedColor: (action as AutoSuggestSetHintedColorAction).hintedColor
      });
    default:
      return state;
  }
};

export default autoSuggest;