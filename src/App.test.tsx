import * as React from 'react';
import { mount } from 'enzyme';

import { App } from './App';
import colorsMock from './mocks/colorsMock';

const props = {
  inputValue: '',
  colors: colorsMock,
  isFetching: false,
  errorMessage: '',
  selectedColor: colorsMock[0],
  hintedColor: colorsMock[0],
  fetchColors: jest.fn(),
  handleInputChange: jest.fn(),
  handleColorSelect: jest.fn(),
  handleHintedColorChange: jest.fn(),
};

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
});
