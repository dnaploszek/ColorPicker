import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Color, Colors } from './@types/colors.types';

import AutoSuggest from './components/AutoSuggest/AutoSuggest';

import { fetchColors, selectColor } from './actions/colors';
import { changeInputValue } from './actions/autoSuggest';

import './App.css';

interface Props {
  inputValue: string;
  colors: Colors;
  isFetching: boolean;
  fetchColors: () => Promise<void>;
  handleInputChange: (value: string) => void;
  handleColorSelect: (color: Color) => void;
}

class App extends React.Component<Props> {
  async componentDidMount() {
    await this.props.fetchColors();
  }

  render() {
    const { inputValue, colors, isFetching, handleInputChange, handleColorSelect } = this.props;
    return (
      <div className="app--container">
        <AutoSuggest
          value={inputValue}
          colors={colors}
          isFetching={isFetching}
          onInputChange={handleInputChange}
          onSelectColor={handleColorSelect}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.autoSuggest,
  colors: state.colors.colors,
  isFetching: state.isFetching,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchColors: () => dispatch(fetchColors()),
  handleInputChange: (value: string) => {
    dispatch(changeInputValue(value));
  },
  handleColorSelect: (color: Color) => {
    dispatch(selectColor(color));
    dispatch(changeInputValue(''));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
