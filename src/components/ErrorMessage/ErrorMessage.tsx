import * as React from 'react';

import dict from '../../constants/dict-eng';
import './ErrorMessage.css';

interface Props {
  message: string;
}

export default class ErrorMessage extends React.PureComponent<Props> {
  render() {
    const { message } = this.props;
    return (
      <div className="error-message--container">
        <p>
          {message}
        </p>
        <p>
          {dict.errorMessage}
        </p>
      </div>
    );
  }
}