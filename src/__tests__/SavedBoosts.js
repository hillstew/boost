import React from 'react';
import { shallow } from 'enzyme';
import { SavedBoosts } from '../containers/SavedBoosts';
import { removeSaved } from '../actions';
import { mapDispatchToProps } from '../containers/SavedBoosts';
jest.mock('../actions');

describe('SavedBoosts', () => {
  let wrapper;
  let removeSaved;
  let saved;
  let boost;

  beforeEach(() => {
    removeSaved = jest.fn();
    saved = [{}, {}, {}];
    wrapper = shallow(<SavedBoosts removeSaved={removeSaved} saved={saved} />);
    boost = {
      id: '3',
      senderNum: '22',
      recipientNum: '45',
      boostMessage: 'oh hi',
      dogImgSrc: 'hfksjdh-555.jpg'
    };
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call removeSaved when delete is clicked', () => {
    wrapper.find('.delete').simulate('click');
    expect(wrapper.instance().props.removeSaved).toHaveBeenCalledWith(boost.id);
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when removeSaved is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = removeSaved(boost.id);
      const props = mapDispatchToProps(mockDispatch);
      props.removeSaved(boost.id);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
