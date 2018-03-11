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
    expect(wrapper.find('Loading').length).toBe(0);
    expect(wrapper.find('ErrorMessage').length).toBe(0);
    expect(wrapper.find('ColorPickerSelect').length).toBe(1);
    expect(wrapper.find('ColorPickerInput').length).toBe(1);
    expect(wrapper.find('ColorPickerButton').length).toBe(1);
  });

  it('should show error component on error', () => {
    expect(wrapper.find('ErrorMessage').length).toBe(0);
    wrapper.setProps({errorMessage: 'error'});
    expect(wrapper.find('ErrorMessage').length).toBe(1);
  });

  it('should show loading component on error', () => {
    expect(wrapper.find('Loading').length).toBe(0);
    wrapper.setProps({isFetching: true});
    expect(wrapper.find('Loading').length).toBe(1);
  });
});
