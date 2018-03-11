import * as React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading';

const props = {
  loadingText: 'Loading...',
};

describe('Loading Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Loading {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
});
