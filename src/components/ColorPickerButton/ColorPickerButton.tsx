import * as React from 'react';

import dict from '../../constants/dict-eng';

import './ColorPickerButton.css';
import { getBackgroundColorStyle, getColorStyle } from '../../utils/stylesUtils';

interface Props {
  colorHex: string;
}

export default class ColorPickerButton extends React.Component<Props> {
  render() {
    const { colorHex } = this.props;

    return (
      <button
        style={{ ...getBackgroundColorStyle(colorHex, true), ...getColorStyle(colorHex, false)}}
        className="color-picker-button--button"
      >
        {dict.accept}
      </button>
    );
  }
}