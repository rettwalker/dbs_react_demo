import React from 'react';
import { shallow, mount } from 'enzyme';
import Navbar from './index'
describe('', () => {
    let wrapper, deepWrapper
    beforeEach(() => {
        wrapper = shallow(<Navbar name={'DBS'} />);
        deepWrapper = mount(<Navbar name={'DBS'} />);
    })
    it('renders without crashing', () => {
        expect(wrapper.find('.navbar')).toHaveLength(1)
        expect(deepWrapper.prop('name')).toEqual('DBS')
    });

})