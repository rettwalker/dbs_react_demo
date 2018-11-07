import React from 'react';
import { shallow, mount } from 'enzyme';
import MasterDetailView from './index'
import ListView from '../listView'
import AddFramework from '../addFramework'
import DetailView from '../detailView'
describe('Master Detail View', () => {
    let wrapper, items
    beforeEach(() => {
        items = [{}]
        wrapper = shallow(<MasterDetailView items={items} />)
    })
    it('renders without crashing', () => {

        expect(wrapper.find(ListView)).toHaveLength(1)
        expect(wrapper.find(DetailView)).toHaveLength(1)
        expect(wrapper.find('.add-new-btn')).toHaveLength(1)
    })

    it('render detail view with the current selected item', () => {
        console.log(wrapper.instance().props)
    })

    it('renders add new component after button click', () => {
        expect(wrapper.find(ListView)).toHaveLength(1)

        let addNewBtn = wrapper.find('.add-new-btn')
        addNewBtn.simulate('click')
        expect(wrapper.find(AddFramework)).toHaveLength(1)
        expect(wrapper.find(DetailView)).toHaveLength(0)
    })
})