import { ColorsActions, ColorsActionsEnum, ReceiveColorsAction, SelectColorAction } from '../actions/colors';
import { Color, Colors } from '../@types/colors.types';
import { assignNewState } from '../utils/reduxUtils';

export interface ColorsState {
  isFetching: boolean;
  didError: boolean;
  colors: Colors;
  selectedColor: Color;
}

const initialState: ColorsState = {
  isFetching: false,
  didError: false,
  colors: [],
  selectedColor: {
    name: 'white',
    hex: 'FFFFFF',
  },
};

const colors = (state: ColorsState = initialState, action: ColorsActions): ColorsState => {
  switch (action.type) {
    case ColorsActionsEnum.REQUEST_COLORS:
      return assignNewState(state, {
        isFetching: true,
        didError: false,
      });
    case ColorsActionsEnum.RECEIVE_COLORS:
      return assignNewState(state, {
        isFetching: false,
        didError: false,
        colors: (action as ReceiveColorsAction).colors,
      });
    case ColorsActionsEnum.SELECT_COLOR:
      return assignNewState(state, {
        selectedColor: (action as SelectColorAction).color,
      });
    default:
      return state;
  }
};

export default colors;