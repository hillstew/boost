import * as actions from './index';

describe('actions', () => {
  it('should return a type of SET_DOG_IMAGE, with the image', () => {
    const image = 'fdskjhg';
    const expected = {
      type: 'SET_DOG_IMAGE',
      image
    };
    const result = actions.setDogImage(image);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_ERROR, with the error', () => {
    const error = 'pesky error';
    const expected = {
      type: 'SET_ERROR',
      error
    };
    const result = actions.setError(error);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_LOADING, with bool', () => {
    const loading = false;
    const expected = {
      type: 'SET_LOADING',
      loading
    };
    const result = actions.setLoading(loading);
    expect(result).toEqual(expected);
  });

  it('should return a type of REMOVE_SAVED, with the id', () => {
    const id = '34242';
    const expected = {
      type: 'REMOVE_SAVED',
      id
    };
    const result = actions.removeSaved(id);
    expect(result).toEqual(expected);
  });

  it('should return a type of ADD_SAVED, with the boost', () => {
    const savedBoost = {
      senderNum: '22',
      recipientNum: '45',
      boostMessage: 'oh hi',
      dogImgSrc: 'mockDogImg'
    };
    const expected = {
      type: 'ADD_SAVED',
      savedBoost
    };
    const result = actions.addSaved(savedBoost);
    expect(result).toEqual(expected);
  });
});
