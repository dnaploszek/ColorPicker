import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Color, Colors } from './@types/colors.types';

import AutoSuggest from './components/AutoSuggest/AutoSuggest';

import { fetchColors, selectColor } from './actions/colors';
import { changeInputValue, setHintedColor } from './actions/autoSuggest';
import { getBackgroundColorStyle } from './utils/stylesUtils';

import './App.css';

interface Props {
  inputValue: string;
  colors: Colors;
  isFetching: boolean;
  errorMessage: string;
  selectedColor: Color;
  hintedColor: Color;
  fetchColors: () => Promise<void>;
  handleInputChange: (value: string) => void;
  handleColorSelect: (color: Color) => void;
  handleHintedColorChange: (color: Color) => void;
}

class App extends React.Component<Props> {
  async componentDidMount() {
    await this.props.fetchColors();
  }

  render() {
    const {
      inputValue, hintedColor, colors, isFetching, errorMessage, selectedColor, handleInputChange, handleColorSelect,
      handleHintedColorChange
    } = this.props;
    return (
      <div className="app--container">
        <div style={getBackgroundColorStyle(selectedColor.hex)} className="app--background"/>
        <AutoSuggest
          value={inputValue}
          colors={colors}
          hintedColor={hintedColor}
          isFetching={isFetching}
          errorMessage={errorMessage}
          selectedColor={selectedColor}
          onInputChange={handleInputChange}
          onSelectColor={handleColorSelect}
          onHintedColorChange={handleHintedColorChange}
        />
      </div>
    );
  }
}

const filterColors = (colors: Colors, startsWith: string): Colors => {
  if (startsWith.length < 2) {
    return [];
  }
  return colors.filter(({name, hex}) => name.startsWith(startsWith) || hex.startsWith(startsWith));
};

const mapStateToProps = (state) => {
  const filteredColors = filterColors(state.colors.colors, state.autoSuggest.inputValue);
  return {
    inputValue: state.autoSuggest.inputValue,
    colors: filteredColors,
    hintedColor: filteredColors.length && !state.autoSuggest.hintedColor ?
      filteredColors[0] : state.autoSuggest.hintedColor,
    selectedColor: state.colors.selectedColor,
    isFetching: state.colors.isFetching,
    errorMessage: state.colors.errorMessage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchColors: () => dispatch(fetchColors()),
  handleInputChange: (value: string) => {
    dispatch(changeInputValue(value));
  },
  handleHintedColorChange: (color: Color) => {
    dispatch(setHintedColor(color));
  },
  handleColorSelect: (color: Color) => {
    dispatch(selectColor(color));
    dispatch(changeInputValue(''));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
