
import { fromJS } from 'immutable';
import titlesPageReducer from '../reducer';

describe('titlesPageReducer', () => {
  it('returns the initial state', () => {
    expect(titlesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
