import React, { component } from 'react';
import { BoostForm } from '../containers/BoostForm';
import { shallow } from 'enzyme';
import shortid from 'shortid';
import { addSaved } from '../actions';
import { mapDispatchToProps } from '../containers/BoostForm';
jest.mock('../actions');

describe('BoostForm', () => {
  let wrapper;
  let mockAddSaved;
  let mockFetchDog;
  let mockDogImg;
  let boost;
  let mockHistory;

  beforeEach(() => {
    mockAddSaved = jest.fn();
    mockDogImg = 'fdg43-1';
    mockFetchDog = jest.fn();
    mockHistory = { replace: jest.fn() };
    boost = {
      id: '3',
      senderNum: '22',
      recipientNum: '45',
      boostMessage: 'oh hi',
      dogImgSrc: mockDogImg
    };
    wrapper = shallow(
      <BoostForm
        imgId={boost.id}
        history={mockHistory}
        addSaved={mockAddSaved}
        dogImgSrc={mockDogImg}
        fetchDogImage={mockFetchDog}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addSaved when the save button is clicked', () => {
    shortid.generate = jest.fn().mockImplementation(() => '3');
    wrapper.instance().setState({
      senderNum: boost.senderNum,
      recipientNum: boost.recipientNum,
      boostMessage: boost.boostMessage
    });
    wrapper.instance().forceUpdate();
    wrapper.instance().handleSave();
    expect(wrapper.instance().props.addSaved).toHaveBeenCalledWith(boost);
  });

  it('should call handleSubmit when the form is submitted', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.instance().forceUpdate();
    const mockEvent = { preventDefault: () => {} };
    wrapper.find('form').simulate('submit', mockEvent);
    expect(spy).toHaveBeenCalled();
  });

  it('should update state based on the name', () => {
    const mockEvent = { target: { name: 'senderNum', value: '123-456-7890' } };
    const expected = '123-456-7890';
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state().senderNum).toEqual(expected);
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when fetchDogImage is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addSaved(boost);
      const props = mapDispatchToProps(mockDispatch);
      props.addSaved(boost);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
