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

    it('animate should change dots array properly', () => {
        expect(wrapper.state().dots.toString()).toBe([0, 1, 0].toString()); // animate called onMount
        wrapper.instance().animate();
        expect(wrapper.state().dots.toString()).toBe([0, 0, 1].toString());
    });
});
