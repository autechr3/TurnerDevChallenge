/**
 *
 * TitlesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectTitles, makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';

import ReactTable from 'react-table';
import 'react-table/react-table.css'

export class TitlesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { loading, error, titles } = this.props;
    const titlesListProps = {
      loading,
      error,
      repos,
    };   

    return (
      <div>
        <h1>Titles</h1>
        <TitlesList {...titlesListProps} />
      </div>
    );
  }
}

TitlesPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  titles: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  titles: makeSelectTitles(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withReducer = injectReducer({ key: 'titlesPage', reducer });
const withSaga = injectSaga({ key: 'titlesPage', saga });

export default compose(
  withReducer,
  withSaga,
  mapStateToProps,
)(TitlesPage);
