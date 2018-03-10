import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Colors } from './@types/colors.types';

import AutoSuggest from './components/AutoSuggest/AutoSuggest';

import { fetchColors } from './actions/colors';
import { changeInputValue } from './actions/autoSuggest';

import './App.css';

interface Props {
  inputValue: string;
  colors: Colors;
  isFetching: boolean;
  fetchColors: () => Promise<void>;
  handleInputChange: (value: string) => void;
}

class App extends React.Component<Props> {
  async componentDidMount() {
    await this.props.fetchColors();
  }

  render() {
    const { inputValue, isFetching, handleInputChange } = this.props;
    return (
      <div className="app--container">
        <AutoSuggest
          value={inputValue}
          onInputChange={handleInputChange}
          isFetching={isFetching}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.autoSuggest,
  colors: state.colors,
  isFetching: state.isFetching,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchColors: () => dispatch(fetchColors()),
  handleInputChange: (value: string) => {
    dispatch(changeInputValue(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
