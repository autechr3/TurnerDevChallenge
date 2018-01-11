/*
 *
 * TitlesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_TITLES,
  LOAD_TITLES_SUCCESS,
  LOAD_TITLES_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  titles: false,
});

function titlesPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TITLES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('titles', false);
    case LOAD_REPOS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('titles', action.titles);
    case LOAD_REPOS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)        
        .set('titles', false);
    default:
      return state;
  }
}

export default titlesPageReducer;
