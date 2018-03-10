import * as React from 'react';

import { Color, Colors } from '../../@types/colors.types';
import { isArrayEmpty } from '../../utils/objectUtils';

import { getBackgroundColorStyle, getColorStyle } from '../../utils/stylesUtils';
import './ColorPickerSelect.css';

interface Props {
  selectOptions: Colors;
  colorHex: string;
  onSelect: (color: Color) => void;
}

export default class ColorPickerSelect extends React.Component<Props> {
  handleSelect(color: Color) {
    return () => {
      this.props.onSelect(color);
    };
  }

  render() {
    const { selectOptions, colorHex } = this.props;
    if (isArrayEmpty(selectOptions)) {
      return null;
    }

    return (
      <ul
        style={{...getBackgroundColorStyle(colorHex, true), ...getColorStyle(colorHex, false)}}
        className="color-picker-select--list-container"
      >
        {selectOptions.map((color: Color) => (
          <li
            key={color.hex}
            onClick={this.handleSelect(color)}
            className="color-picker-select--list-item"
          >
            <div
              style={getBackgroundColorStyle(color.hex)}
              className="color-picker-select--color-highlight"
            />
            <span className="color-picker-select--color-name">
              {color.name}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}