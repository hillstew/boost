import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from '../components/Logo';

describe('Logo', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
