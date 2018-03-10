import { Color } from '../@types/colors.types';

export enum AutoSuggestActionsEnum {
  CHANGE_TEXT = 'CHANGE_TEXT',
  SET_HINTED_COLOR = 'SET_HINTED_COLOR',
}

export interface AutoSuggestChangeTextAction {
  type: AutoSuggestActionsEnum;
  fieldValue: string;
}

export interface AutoSuggestSetHintedColorAction {
  type: AutoSuggestActionsEnum;
  hintedColor: Color;
}

export type AutoSuggestAction = AutoSuggestChangeTextAction | AutoSuggestSetHintedColorAction;

export function changeInputValue(fieldValue: string): AutoSuggestChangeTextAction {
  return {
    type: AutoSuggestActionsEnum.CHANGE_TEXT,
    fieldValue,
  };
}

export function setHintedColor(hintedColor: Color): AutoSuggestSetHintedColorAction {
  return {
    type: AutoSuggestActionsEnum.SET_HINTED_COLOR,
    hintedColor,
  };
}