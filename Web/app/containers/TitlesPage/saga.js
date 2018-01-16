import { takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_TITLES } from 'containers/App/constants';
import { titlesLoaded, titlesLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export function* getTitles() {
  const requestURL = 'http://localhost:5000/api/titles';
  
  try {
    const titles = yield call(request, requestURL);
    yield put(titlesLoaded(titles));
  } catch (err) {
    yield put(titlesLoadingError(err));
  }
}

export default function* titlesData() {
  yield takeLatest(LOAD_TITLES, getTitles);
}