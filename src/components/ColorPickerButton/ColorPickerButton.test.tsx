import * as React from 'react';
import { shallow } from 'enzyme';

import ColorPickerButton from './ColorPickerButton';

const props = {
  colorHex: 'FFFFFF',
  disabled: false,
  onPress: jest.fn(),
};

describe('ColorPickerButton Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ColorPickerButton {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should be disabled with disabled prop', () => {
    expect(wrapper.find('.color-picker-button--button').getElement().props.disabled).toBe(false);
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('.color-picker-button--button').getElement().props.disabled).toBe(true);
  });

  it('should call onPress when user clicks the button', () => {
    expect(props.onPress.mock.calls.length).toBe(0);
    wrapper.find('.color-picker-button--button').simulate('click');
    expect(props.onPress.mock.calls.length).toBe(1);
  });
});
