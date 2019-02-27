import React from 'react';
import { BoostCard } from '../components/BoostCard';
import { shallow } from 'enzyme';
import { fetchDogImage } from '../thunks/fetchDogImage';
jest.mock('../thunks/fetchDogImage');

describe('BoostCard', () => {
  let mockImg = 'hfdskfj.jpg';
  let mockFetchDog;
  let wrapper;

  beforeEach(() => {
    mockImg = 'hfdskfj.jpg';
    mockFetchDog = jest.fn();
    wrapper = shallow(<BoostCard img={mockImg} fetchDogImage={mockFetchDog} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call fetchDogImage onClick', () => {
    let wrapper = shallow(<BoostCard img={mockImg} fetchDogImage={mockFetchDog} />);
    // const spy = jest.spyOn(wrapper.instance(), 'fetchDogImage');
    // wrapper.forceUpdate();
    wrapper.find('BoostCard-button').simulate('click');
    expect(wrapper.instance().props.fetchDogImage).toHaveBeenCalled();
  });
});
