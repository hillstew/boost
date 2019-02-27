import React from 'react';
import { BoostCard } from '../components/BoostCard';
import { shallow } from 'enzyme';

describe('BoostCard', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<BoostCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
