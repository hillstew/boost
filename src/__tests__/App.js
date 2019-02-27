import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from '../containers/App';
import { shallow } from 'enzyme';
import { fetchDogImage } from '../thunks/fetchDogImage';
jest.mock('../thunks/fetchDogImage');

describe('App', () => {
  let wrapper;
  let fetchDogMock;
  beforeEach(() => {
    fetchDogMock = jest.fn();
    wrapper = shallow(<App fetchDogImage={fetchDogMock} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchDogImage when componentDidMount is invoked', () => {
    expect(wrapper.instance().props.fetchDogImage).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    it('should reutrn dogImgSrc, isLoading, and hasError', () => {
      const mockState = {
        dogImgSrc: 'fdgsgf',
        isLoading: true,
        hasError: 'error',
        extra: 'extra'
      };

      const expected = {
        dogImgSrc: 'fdgsgf',
        isLoading: true,
        hasError: 'error'
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
