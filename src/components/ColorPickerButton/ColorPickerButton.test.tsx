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
});
