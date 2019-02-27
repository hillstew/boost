import { dogReducer } from '../dogReducer';
import * as actions from '../../actions';

describe('dogReducer', () => {
  it('should return the default state', () => {
    const result = dogReducer(undefined, {});
    expect(result).toEqual('');
  });

  it('should return the image', () => {
    const expected = 'ba7d232f-e40c-40bb-a26b-3f0b5cd0e68a.jpg';
    const result = dogReducer(undefined, actions.setDogImage('ba7d232f-e40c-40bb-a26b-3f0b5cd0e68a.jpg'));
    expect(result).toEqual(expected);
  });
});
