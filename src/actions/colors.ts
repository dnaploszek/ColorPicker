import { Colors } from '../@types/colors.types';
import ColorsService from '../services/colorsService';

export enum ColorsActionsEnum {
  REQUEST_COLORS = 'REQUEST_COLORS',
  RECEIVE_COLORS = 'RECEIVE_COLORS',
}

export interface ColorsAction {
  type: ColorsActionsEnum;
}

export interface ReceiveColorsAction extends ColorsAction {
  colors: Colors;
}

export type ColorsActions = ColorsAction | ReceiveColorsAction;

export function requestColors(): ColorsAction {
  return {
    type: ColorsActionsEnum.REQUEST_COLORS,
  };
}

export function receiveColors(colors: Colors): ReceiveColorsAction {
  return {
    type: ColorsActionsEnum.RECEIVE_COLORS,
    colors: colors,
  };
}

export function fetchColors() {
  return async dispatch => {
    dispatch(requestColors());
    const colors = await ColorsService.fetchColors();
    dispatch(receiveColors(colors));
  };
}