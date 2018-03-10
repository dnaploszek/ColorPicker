import { ColorsActions, ColorsActionsEnum, ReceiveColorsAction } from '../actions/colors';
import { Colors } from '../@types/colors.types';
import { assignNewState } from '../utils/reduxUtils';

export interface ColorsState {
  isFetching: boolean;
  didError: boolean;
  colors: Colors;
}

const initialState: ColorsState = {
  isFetching: false,
  didError: false,
  colors: [],
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
    default:
      return state;
  }
};

export default colors;