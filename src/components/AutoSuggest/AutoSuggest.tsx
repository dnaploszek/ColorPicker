import * as React from 'react';
import { Color, Colors } from '../../@types/colors.types';

import ColorPickerInput from '../ColorPickerInput/ColorPickerInput';
import ColorPickerSelect from '../ColorPickerSelect/ColorPickerSelect';
import ColorPickerButton from '../ColorPickerButton/ColorPickerButton';

import dict from '../../constants/dict-eng';
import './AutoSuggest.css';
import Loading from '../Loading/Loading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface Props {
  value: string;
  colors: Colors;
  selectedColor: Color;
  hintedColor: Color;
  isFetching: boolean;
  errorMessage: string;
  onInputChange: (value: string) => void;
  onSelectColor: (color: Color) => void;
  onHintedColorChange: (color: Color) => void;
}

export default class AutoSuggest extends React.Component<Props> {
  handleAcceptButton = () => {
      this.props.onSelectColor(this.props.hintedColor);
  }

  render() {
    const {
      value, colors, hintedColor, isFetching, errorMessage, selectedColor, onInputChange, onSelectColor,
      onHintedColorChange
    } = this.props;

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
          {isFetching && <Loading loadingText={dict.loadingColors}/>}
          {errorMessage && <ErrorMessage message={errorMessage}/>}
          <ColorPickerSelect
            selectOptions={colors}
            hintedColor={hintedColor}
            colorHex={selectedColor.hex}
            onSelect={onSelectColor}
            onHintedColorChange={onHintedColorChange}
          />
        </div>
        <ColorPickerButton
          colorHex={selectedColor.hex}
          onPress={this.handleAcceptButton}
          disabled={!hintedColor}
        />
      </div>
    );
  }
}