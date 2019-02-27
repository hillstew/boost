import React from 'react';
import { shallow } from 'enzyme';
import { NotFound } from '../components/NotFound';

describe('NotFound', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
