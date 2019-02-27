import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from '../components/Nav';

describe('Nav', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Nav />);
    expect(wrapper).toMatchSnapshot();
  });
});
