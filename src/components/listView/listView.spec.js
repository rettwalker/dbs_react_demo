import React from 'react';
import { shallow, mount } from 'enzyme';
import ListView from './index'
describe('', () => {

    it('', () => {
        //expect(ListView).toBe('function')
    })

    describe('', () => {
        let wrapper, deepWrapper, fakeComponent,
            items = []
        beforeEach(() => {
            fakeComponent = () => <h2>hello</h2>
            let RandomListView = ListView(fakeComponent)
            wrapper = shallow(<RandomListView items={items} />);
            //deepWrapper = mount(<RandomListView items={items} />);
        })
        it('renders without crashing', () => {
            let list = wrapper.find('.list-group')
            expect(list).toHaveLength(1)
            expect(wrapper.find('li.list-group-item')).toHaveLength(0)

            wrapper.setProps({ items: [{}] });
            expect(wrapper.find('li.list-group-item')).toHaveLength(1)
            //expect(deepWrapper.find('ul').children()).toHaveLength(0)
        });
    })

})