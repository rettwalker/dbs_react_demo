import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Navbar from './components/navbar'


describe('', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  it('renders without crashing', () => {
    expect(wrapper.find('.App')).toHaveLength(1)
    expect(wrapper.find(Navbar)).toHaveLength(1)
  });

})