import React from 'react';
import { About } from '../components/About';
import { shallow } from 'enzyme';

describe('About', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
