import * as React from 'react';
import { shallow } from 'enzyme';

import AutoSuggest from './AutoSuggest';
import colorsMock from '../../mocks/colorsMock';

const props = {
  value: '',
  colors: colorsMock,
  selectedColor: colorsMock[0],
  hintedColor: colorsMock[0],
  isFetching: false,
  errorMessage: '',
  onInputChange: jest.fn(),
  onSelectColor: jest.fn(),
  onHintedColorChange: jest.fn(),
};

describe('AutoSuggest Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AutoSuggest {...props}/>);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
});
