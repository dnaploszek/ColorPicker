import * as React from 'react';
import { shallow } from 'enzyme';

import ColorPickerInput from './ColorPickerInput';

const props = {
  value: '',
  placeholder: 'Test placeholder',
  disabled: false,
  colorHex: 'FFFFFF',
  onChange: jest.fn(),
};

describe('ColorPickerInput Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ColorPickerInput {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
});
