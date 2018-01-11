import { createSelector } from 'reselect';

/**
 * Direct selector to the titlesPage state domain
 */
const selectTitlesPageDomain = (state) => state.get('titlesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TitlesPage
 */

const makeSelectTitlesPage = () => createSelector(
  selectTitlesPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectTitlesPage;
export {
  selectTitlesPageDomain,
};
