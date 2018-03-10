import * as React from 'react';

import ColorPickerInput from '../ColorPickerInput/ColorPickerInput';
import dict from '../../constants/dict-eng';
import './AutoSuggest.css';

interface Props {
  value: string;
  onInputChange: (value: string) => void;
  isFetching: boolean;
}

export default class AutoSuggest extends React.Component<Props> {
  render() {
    const { value, isFetching, onInputChange } = this.props;
    return (
      <div className="auto-suggest--container">
        <ColorPickerInput
          value={value}
          placeholder={dict.inputPlaceholder}
          disabled={isFetching}
          onChange={onInputChange}
        />
      </div>
    );
  }
}