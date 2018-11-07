import React from 'react';
import { shallow, mount } from 'enzyme';
import ListView from './index'
describe('List View', () => {

    let wrapper, items = [], FakeComponent, selectHandlerSpy
    beforeEach(() => {
        selectHandlerSpy = jest.fn()
        FakeComponent = props => <h2>{props.name}</h2>
        wrapper = shallow(<ListView items={items} componentToRender={FakeComponent} selectHandler={selectHandlerSpy} />);
    })

    it('renders without crashing', () => {
        expect(wrapper.find('.list-group')).toHaveLength(1)
        expect(wrapper.find('li.list-group-item')).toHaveLength(0)
        wrapper.setProps({ items: [{}] });
        expect(wrapper.find('li.list-group-item')).toHaveLength(1)
    });
})