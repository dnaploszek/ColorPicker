import * as React from 'react';

import dict from '../../constants/dict-eng';

import { getBackgroundColorStyle, getColorStyle } from '../../utils/stylesUtils';
import './ColorPickerButton.css';

interface Props {
  colorHex: string;
  disabled: boolean;
  onPress: () => void;
}

export default class ColorPickerButton extends React.Component<Props> {
  render() {
    const { colorHex, disabled, onPress } = this.props;

    return (
      <button
        style={{ ...getBackgroundColorStyle(colorHex, true), ...getColorStyle(colorHex, false)}}
        onClick={onPress}
        className="color-picker-button--button"
        disabled={disabled}
      >
        {dict.accept}
      </button>
    );
  }
}