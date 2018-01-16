/**
 *
 * TitlesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectTitles, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { loadTitles } from '../App/actions';
import reducer from './reducer';
import saga from './saga';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

export class TitlesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onPageLoad();
  }
  
  render() {
    const { loading, error, titles } = this.props;

    const columns = [
      {
        Header: 'Title Id',
        accessor: 'titleId',
      },
      {
        Header: 'Title Name',
        accessor: 'titleNameSortable',
      },
      {
        id: 'genres',
        Header: 'Genres',
        accessor: d => d.genres.join(', '),
      },
      {
        Header: 'ReleaseYear',
        accessor: 'releaseYear',
      },
    ];

    return (
      <div>
        <Helmet>
          <title>Titles</title>
          <meta name="description" content="Description of TitlesPage" />
        </Helmet>
        <h1>Titles</h1>
        <ReactTable data={titles ? titles : []} columns={columns} />
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
  onPageLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  titles: makeSelectTitles(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: () => {
      console.log('test');
      dispatch(loadTitles());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'titlesPage', reducer });
const withSaga = injectSaga({ key: 'titlesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TitlesPage);
