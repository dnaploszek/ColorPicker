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
};

describe('ColorPickerSelect Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ColorPickerSelect {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render 10 colors', () => {
    expect(wrapper.find('.color-picker-select--list-item').length).toBe(10);
  });

  it('should highlight hintedColor', () => {
    const highlightedElem = wrapper.find('.color-picker-select--list-item.highlight');
    expect(highlightedElem.length).toBe(1);
    const highlightedColor = highlightedElem.find('span').getElement().props.children;
    expect(highlightedColor).toBe('azure');
    expect(highlightedColor).toBe(props.hintedColor.name);
  });

  it('should call onSelect', () => {
    expect(props.onSelect.mock.calls.length).toBe(0);
    wrapper.find('.color-picker-select--list-item.highlight').simulate('click');
    expect(props.onSelect.mock.calls.length).toBe(1);
  });

  it('should call onHintedColorChange', () => {
    expect(props.onHintedColorChange.mock.calls.length).toBe(0);
    wrapper.find('.color-picker-select--list-item').first().simulate('mouseEnter');
    expect(props.onHintedColorChange.mock.calls.length).toBe(1);
  });

  it('should change to a proper Color', () => {
    expect(props.onHintedColorChange.mock.calls.length).toBe(1);
    wrapper.instance().handleHintedChange(-1);
    expect(props.onHintedColorChange.mock.calls.length).toBe(2);
    expect(props.onHintedColorChange.mock.calls[1][0].name).toBe('aquamarine');
    wrapper.instance().handleHintedChange(1);
    expect(props.onHintedColorChange.mock.calls.length).toBe(3);
    expect(props.onHintedColorChange.mock.calls[2][0].name).toBe('beige');
  });
});
