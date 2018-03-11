import { Color, Colors } from '../@types/colors.types';
import ColorsService from '../services/colorsService';

export enum ColorsActionsEnum {
  SELECT_COLOR = 'SELECT_COLOR',
  REQUEST_COLORS = 'REQUEST_COLORS',
  RECEIVE_COLORS = 'RECEIVE_COLORS',
  DID_ERROR = 'DID_ERROR',
}

export interface ColorsAction {
  type: ColorsActionsEnum;
}

export interface ReceiveColorsAction extends ColorsAction {
  colors: Colors;
}

export interface SelectColorAction extends ColorsAction {
  color: Color;
}

export interface DidErrorAction extends ColorsAction {
  error: Error;
}

export type ColorsActions = ColorsAction | ReceiveColorsAction;

function requestColors(): ColorsAction {
  return {
    type: ColorsActionsEnum.REQUEST_COLORS,
  };
}

function receiveColors(colors: Colors): ReceiveColorsAction {
  return {
    type: ColorsActionsEnum.RECEIVE_COLORS,
    colors: colors,
  };
}

function didError(error: Error): DidErrorAction {
  return {
    type: ColorsActionsEnum.DID_ERROR,
    error: error,
  };
}

export function fetchColors() {
  return async dispatch => {
    dispatch(requestColors());
    try {
      const colors = await ColorsService.fetchColors();
      dispatch(receiveColors(colors));
    } catch (error) {
      dispatch(didError(error));
    }
  };
}

export function selectColor(color: Color): SelectColorAction {
  return {
    type: ColorsActionsEnum.SELECT_COLOR,
    color: color,
  };
}