/**
 * Gets the titles from the API
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_TITLES } from './constants';
import { reposLoaded, repoLoadingError } from './actions';

import request from 'utils/request';

export function* getTitles() {  
  const requestURL = 'http://localhost:5000/api/titles';

  try {
    // Call our request helper (see 'utils/request')
    const titles = yield call(request, requestURL);
    yield put(titlesLoaded(titles));
  } catch (err) {
    yield put(titlesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* titleData() {
  yield takeLatest(LOAD_TITLES, getTitles);
}
