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

  it('should be disabled with disabled prop', () => {
    expect(wrapper.find('.color-picker-input--input').getElement().props.disabled).toBe(false);
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('.color-picker-input--input').getElement().props.disabled).toBe(true);
  });

  it('should call onChange when user fires onChange event', () => {
    expect(props.onChange.mock.calls.length).toBe(0);
    wrapper.find('.color-picker-input--input').simulate('change', { target: { name: 'input', value: 'test' } });
    expect(props.onChange.mock.calls.length).toBe(1);
  });
});
