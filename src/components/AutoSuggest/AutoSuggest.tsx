import * as React from 'react';
import { Color, Colors } from '../../@types/colors.types';

import ColorPickerInput from '../ColorPickerInput/ColorPickerInput';
import ColorPickerSelect from '../ColorPickerSelect/ColorPickerSelect';

import dict from '../../constants/dict-eng';
import './AutoSuggest.css';
import ColorPickerButton from '../ColorPickerButton/ColorPickerButton';

interface Props {
  value: string;
  colors: Colors;
  selectedColor: Color;
  onSelectColor: (color: Color) => void;
  onInputChange: (value: string) => void;
  isFetching: boolean;
}

export default class AutoSuggest extends React.Component<Props> {
  getSelectOptions = (): Colors => {
    const { colors, value } = this.props;

    if (value.length < 2) {
      return [];
    }

    return colors.filter((color: Color) => color.name.startsWith(value) || color.hex.startsWith(value));
  }

  render() {
    const { value, isFetching, selectedColor, onInputChange, onSelectColor } = this.props;
    return (
      <div className="auto-suggest--container">
        <div>
          <ColorPickerInput
            value={value}
            placeholder={dict.inputPlaceholder}
            disabled={isFetching}
            colorHex={selectedColor.hex}
            onChange={onInputChange}
          />
          <ColorPickerSelect
            selectOptions={this.getSelectOptions()}
            colorHex={selectedColor.hex}
            onSelect={onSelectColor}
          />
        </div>
        <ColorPickerButton
          colorHex={selectedColor.hex}
        />
      </div>
    );
  }
}