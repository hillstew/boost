import { savedReducer } from '../savedReducer';
import * as actions from '../../actions';

describe('savedReducer', () => {
  it('should return the default state', () => {
    const result = savedReducer(undefined, {});
    expect(result).toEqual([]);
  });

  it('should add a new boost to state', () => {
    const currentState = [];
    const expected = [
      {
        id: 'bnehkiOcr',
        senderNum: '5',
        recipientNum: '5',
        boostMessage: '5',
        dogImgSrc: '3b5eae93-b3bd-4012-b789-64eb6cdaac65.png'
      }
    ];
    const newBoost = {
      id: 'bnehkiOcr',
      senderNum: '5',
      recipientNum: '5',
      boostMessage: '5',
      dogImgSrc: '3b5eae93-b3bd-4012-b789-64eb6cdaac65.png'
    };

    const result = savedReducer(currentState, actions.addSaved(newBoost));
    expect(result).toEqual(expected);
  });

  it('should remove the boost from state', () => {
    const currentState = [
      {
        id: 'bnehkiOcr',
        senderNum: '5',
        recipientNum: '5',
        boostMessage: '5',
        dogImgSrc: '3b5eae93-b3bd-4012-b789-64eb6cdaac65.png'
      },
      {
        id: 'kiOcr',
        senderNum: '4',
        recipientNum: '5',
        boostMessage: '4',
        dogImgSrc: '393-b3bd-4012-b789-64eb6cdaac65.png'
      }
    ];
    const expected = [
      {
        id: 'kiOcr',
        senderNum: '4',
        recipientNum: '5',
        boostMessage: '4',
        dogImgSrc: '393-b3bd-4012-b789-64eb6cdaac65.png'
      }
    ];
    const result = savedReducer(currentState, actions.removeSaved('bnehkiOcr'));
    expect(result).toEqual(expected);
  });
});
