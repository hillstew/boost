import { loadingReducer } from '../loadingReducer';
import * as actions from '../../actions';

describe('loadingReducer', () => {
  it('should return the default state', () => {
    const result = loadingReducer(undefined, {});
    expect(result).toEqual(true);
  });

  it('should return the bool to set loading with', () => {
    const result = loadingReducer(undefined, actions.setLoading(false));
    expect(result).toEqual(false);
  });
});
