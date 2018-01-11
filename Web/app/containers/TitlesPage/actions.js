import {
  LOAD_TITLES,
  LOAD_TITLES_SUCCESS,
  LOAD_TITLES_ERROR,
} from './constants';

export function loadTitles() {
  return {
    type: LOAD_TITLES,
  };
}

export function titlesLoaded(titles) {
  return {
    type: LOAD_TITLES_SUCCESS,
    titles,
  };
}

export function titlesLoadingError(error) {
  return {
    type: LOAD_TITLES_ERROR,
    error,
  };
}
