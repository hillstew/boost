import { errorReducer } from '../errorReducer';
import * as actions from '../../actions';

describe('errorReducer', () => {
  it('should return the default state', () => {
    const result = errorReducer(undefined, {});
    expect(result).toEqual('');
  });

  it('should return the error to set', () => {
    const expected = 'there was an error fetching';
    const result = errorReducer(undefined, actions.setError('there was an error fetching'));
    expect(result).toEqual(expected);
  });
});
