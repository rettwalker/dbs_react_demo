import React from 'react';
import { shallow, mount } from 'enzyme';
import AddFramework from './index'
describe('', () => {

    let wrapper, deepWrapper, submitChangeStub
    beforeEach(() => {
        submitChangeStub = jest.fn()
        wrapper = shallow(<AddFramework submitChange={submitChangeStub} />);
        deepWrapper = mount(<AddFramework submitChange={submitChangeStub} />);
    })
    it('renders without crashing', () => {
        expect(wrapper.find('div.d-flex')).toHaveLength(1)
        expect(wrapper.find('div.input-group')).toHaveLength(2)
        expect(wrapper.find('button.btn')).toHaveLength(1)
    })
})