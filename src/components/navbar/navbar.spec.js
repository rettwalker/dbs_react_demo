import React from 'react';
import { shallow, mount } from 'enzyme';
import Navbar from './index'
describe('', () => {
    it('renders without crashing', () => {
        let wrapper = shallow(<Navbar name={'DBS'} textColor={'white'} />);
        let navbar = <h3 className="white">DBS</h3>
        expect(wrapper.find('.navbar')).toHaveLength(1)
        expect(wrapper.contains(navbar)).toBe(true)
    });
})