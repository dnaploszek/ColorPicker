import * as React from 'react';
import { ChangeEvent } from 'react';

import { getBackgroundColorStyle, getColorStyle } from '../../utils/stylesUtils';
import './ColorPickerInput.css';

interface Props {
  value: string;
  placeholder: string;
  disabled: boolean;
  colorHex: string;
  onChange: (value: string) => void;
}

export default class ColorPickerInput extends React.Component<Props> {
  static defaultProps = {
    disabled: false,
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value);
  }

  render() {
    const { value, disabled, colorHex, placeholder } = this.props;
    return (
      <input
        style={{...getBackgroundColorStyle(colorHex, true), ...getColorStyle(colorHex, false)}}
        className={'color-picker-input--input'}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={this.onChange}
      />
    );
  }
}