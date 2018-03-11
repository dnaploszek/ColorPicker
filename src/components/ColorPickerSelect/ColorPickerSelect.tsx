import * as React from 'react';

import { Color, Colors } from '../../@types/colors.types';
import { isArrayEmpty } from '../../utils/objectUtils';

import { getBackgroundColorStyle, getColorStyle } from '../../utils/stylesUtils';
import './ColorPickerSelect.css';

interface Props {
  selectOptions: Colors;
  hintedColor: Color;
  colorHex: string;
  onSelect: (color: Color) => void;
  onHintedColorChange: (color: Color) => void;
}

export default class ColorPickerSelect extends React.Component<Props> {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleSelect = (color: Color) => {
    return () => {
      this.props.onSelect(color);
    };
  }

  handleMouseEnter = (color: Color) => {
    return () => {
      this.props.onHintedColorChange(color);
    };
  }

  handleKeyDown = (e: KeyboardEvent) => {
    const { key } = e;
    if (key !== 'ArrowUp' && key !== 'ArrowDown' && key !== 'Enter') {
      return;
    }
    e.preventDefault();
    switch (key) {
      case 'ArrowUp':
        this.handleHintedChange(-1);
        return;
      case 'ArrowDown':
        this.handleHintedChange(1);
        return;
      case 'Enter':
        this.props.onSelect(this.props.hintedColor);
        return;
      default:
    }
  }

  handleHintedChange = (direction: number) => {
    const { selectOptions, hintedColor } = this.props;
    const index = selectOptions.findIndex((color: Color) => color.name === hintedColor.name);
    const newIndex = (index + direction) % selectOptions.length;
    this.props.onHintedColorChange(selectOptions[newIndex < 0 ? selectOptions.length - 1 : newIndex]);
  }

  render() {
    const { selectOptions, hintedColor, colorHex } = this.props;
    if (isArrayEmpty(selectOptions)) {
      return null;
    }

    return (
      <ul
        style={{ ...getBackgroundColorStyle(colorHex, true), ...getColorStyle(colorHex, false) }}
        className="color-picker-select--list-container"
      >
        {selectOptions.map((color: Color) => (
          <li
            key={color.hex}
            onClick={this.handleSelect(color)}
            onMouseEnter={this.handleMouseEnter(color)}
            className={`color-picker-select--list-item${color.name === hintedColor.name ? ' highlight' : ''}`}
          >
            <div
              style={getBackgroundColorStyle(color.hex)}
              className="color-picker-select--color-highlight"
            />
            <span>
              {color.name}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}