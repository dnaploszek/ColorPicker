import * as React from 'react';
import { ChangeEvent } from 'react';

import './ColorPickerInput.css';

interface Props {
  value: string;
  placeholder: string;
  disabled: boolean;
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
    const { value, disabled, placeholder } = this.props;
    return (
      <input
        className={'color-picker-input--input'}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={this.onChange}
      />
    );
  }
}