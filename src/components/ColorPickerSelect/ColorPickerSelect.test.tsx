import * as React from 'react';
import { shallow } from 'enzyme';

import ColorPickerSelect from './ColorPickerSelect';
import colorsMock from '../../mocks/colorsMock';

const props = {
  selectOptions: colorsMock.slice(0, 10),
  hintedColor: colorsMock[4],
  colorHex: 'FFFFFF',
  onSelect: jest.fn(),
  onHintedColorChange: jest.fn(),
}

describe('ColorPickerSelect Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ColorPickerSelect {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
});
