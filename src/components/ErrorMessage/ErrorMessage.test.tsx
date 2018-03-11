import * as React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from './ErrorMessage';

const props = {
  message: 'Error',
};

describe('ErrorMessage Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ErrorMessage {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
});
