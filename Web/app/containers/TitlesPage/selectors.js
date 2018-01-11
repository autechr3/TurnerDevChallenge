import { createSelector } from 'reselect';

const selectTitlesPageDomain = (state) => {
  console.log(state);
  state.get('titlesPage');
};

const makeSelectLoading = () => createSelector(
  selectTitlesPageDomain,
  (domainState) => domainState.get('loading')
);

const makeSelectError = () => createSelector(
  selectTitlesPageDomain,
  (domainState) => domainState.get('error')
);

const makeSelectTitles = () => createSelector(
  selectTitlesPageDomain,
  (domainState) => domainState.get('titles')
);

export {
  selectTitlesPageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectTitles,
};
