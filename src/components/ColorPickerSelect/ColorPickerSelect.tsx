import * as React from 'react';

import { Color, Colors } from '../../@types/colors.types';
import { isArrayEmpty } from '../../utils/objectUtils';

import './ColorPickerSelect.css';

interface Props {
  selectOptions: Colors;
  onSelect: (color: Color) => void;
}

export default class ColorPickerSelect extends React.Component<Props> {
  getBackgroundColorStyle = (hex: string) => {
    return {
      backgroundColor: `#${hex}`,
    };
  }

  handleSelect(color: Color) {
    return () => {
      this.props.onSelect(color);
    };
  }

  render() {
    const { selectOptions } = this.props;
    if (isArrayEmpty(selectOptions)) {
      return null;
    }

    return (
      <ul className="color-picker-select--list-container">
        {selectOptions.map((color: Color) => (
          <li
            key={color.hex}
            onClick={this.handleSelect(color)}
            className="color-picker-select--list-item"
          >
            <div
              style={this.getBackgroundColorStyle(color.hex)}
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