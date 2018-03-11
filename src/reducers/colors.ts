import { Color, Colors } from '../@types/colors.types';

import {
  ColorsActions, ColorsActionsEnum, DidErrorAction, ReceiveColorsAction,
  SelectColorAction
} from '../actions/colors';
import { assignNewState } from '../utils/reduxUtils';

export interface ColorsState {
  isFetching: boolean;
  errorMessage: string;
  colors: Colors;
  selectedColor: Color;
}

const initialState: ColorsState = {
  isFetching: false,
  errorMessage: '',
  colors: [],
  selectedColor: {
    name: 'red',
    hex: 'ff0000',
  },
};

const colors = (state: ColorsState = initialState, action: ColorsActions): ColorsState => {
  switch (action.type) {
    case ColorsActionsEnum.REQUEST_COLORS:
      return assignNewState(state, {
        isFetching: true,
        errorMessage: '',
      });
    case ColorsActionsEnum.RECEIVE_COLORS:
      return assignNewState(state, {
        isFetching: false,
        errorMessage: '',
        colors: (action as ReceiveColorsAction).colors,
      });
    case ColorsActionsEnum.SELECT_COLOR:
      return assignNewState(state, {
        selectedColor: (action as SelectColorAction).color,
      });
    case ColorsActionsEnum.DID_ERROR:
      return assignNewState(state, {
        errorMessage: (action as DidErrorAction).error.message,
        isFetching: false,
      });
    default:
      return state;
  }
};

export default colors;