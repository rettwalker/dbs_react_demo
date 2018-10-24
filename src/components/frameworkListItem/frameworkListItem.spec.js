import React from 'react';
import { shallow, mount } from 'enzyme';
import frameworkListItem from './index'
describe('', () => {

    let wrapper
    beforeEach(() => {
        wrapper = shallow(<frameworkListItem name={'dbs'} />);
        //deepWrapper = mount(<RandomListView items={items} />);
    })
    it('renders without crashing', () => {
        expect(wrapper.prop('name')).toEqual('dbs')
    })
})