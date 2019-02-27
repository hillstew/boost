import React from 'react';
import { shallow } from 'enzyme';
import { BoostsSection } from '../containers/BoostsSection';
import { mapStateToProps } from '../containers/BoostsSection';
import { fetchDogImage } from '../thunks/fetchDogImage';
import { mapDispatchToProps } from '../containers/BoostForm';

jest.mock('../thunks/fetchDogImage');

describe('BoostsSection', () => {
  let wrapper;
  let mockDogImg;
  let mockFetchDog;

  beforeEach(() => {
    mockDogImg = 'rg56-78.jpg';
    mockFetchDog = jest.fn();
    wrapper = shallow(<BoostsSection dogImgSrc={mockDogImg} isLoading={true} fetchDogImage={mockFetchDog} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should reutrn dogImgSrc, isLoading, and hasError', () => {
      const mockState = {
        dogImgSrc: 'fdgsgf',
        isLoading: true,
        extra: 'extra'
      };

      const expected = {
        dogImgSrc: 'fdgsgf',
        isLoading: true
      };

      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when fetchDogImage is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchDogImage();
      const props = mapDispatchToProps(mockDispatch);
      props.fetchDogImage();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
