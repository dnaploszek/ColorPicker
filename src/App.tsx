import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Colors } from './@types/colors.types';

import { fetchColors } from './actions/colors';

import './App.css';

interface Props {
  inputValue: string;
  colors: Colors;
  fetchColors: () => Promise<void>;
}

class App extends React.Component<Props> {
  async componentDidMount() {
    await this.props.fetchColors();
  }

  render() {
    return (
      <div className="app--container"/>
    );
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.autoSuggest,
  colors: state.colors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchColors: () => dispatch(fetchColors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
