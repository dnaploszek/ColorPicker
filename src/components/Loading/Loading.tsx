import * as React from 'react';

import './Loading.css';

const DOTS_COUNT = 3;

interface Props {
  loadingText: string;
}

interface State {
  dots: Array<number>;
}

export default class Loading extends React.Component<Props, State> {
  _isMounted: boolean;

  constructor(props: Props) {
    super(props);
    const dots = Array(DOTS_COUNT).fill(0);
    if (DOTS_COUNT > 0) {
      dots[0] = 1;
    }
    this.state = {
      dots
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.animate();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  animate = () => {
    if (this._isMounted) {
      const dots = [...this.state.dots];
      this.setState({
        dots: dots.splice(dots.length - 1, 1).concat(dots),
      });
      setTimeout(this.animate, 250);
    }
  }

  render() {
    const { loadingText } = this.props;
    return (
      <div className="loading--container">
        <span>
          {loadingText}
        </span>
        <div className="loading--animation">
          {this.state.dots.map((dot: number, index: number) => (
            <div key={index} className={`loading--dot${dot ? ' bump' : ''}`}/>
          ))}
        </div>
      </div>
    );
  }
}