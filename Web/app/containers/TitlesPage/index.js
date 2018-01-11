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
import makeSelectTitlesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import ReactTable from 'react-table';
import 'react-table/react-table.css'

export class TitlesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const data = [{
      titleId: 70523,
      titleName: 'Cavalcade',
      genres: [
        'Adaptation',
        'Based-on',
        'Drama'
      ],
      releaseYear: 1933
    },{
      titleId: 67044,
      titleName: 'All About Eve',
      genres: [
        "Adaptation",
        "Based-on",
        "Drama"
      ],
      releaseYear: 1950
    },{
      titleId: 12708,
      titleName: 'A Man for All Seasons',
      genres: [
        "Adaptation",
        "Based-on",
        "Drama",
        "Historical"
      ],
      releaseYear: 1966
    }];
   
    const columns = [{
      Header: 'TitleId',
      accessor: 'titleId',
      Cell: props => <span className='number'>{props.value}</span>
    }, {
      Header: 'TitleName',
      accessor: 'titleName',      
    }, {
      id: 'genres',
      Header: 'Genres',
      accessor: d => d.genres.join()
    }, {
      Header: 'Release Year',
      accessor: 'releaseYear',
      Cell: props => <span className='number'>{props.value}</span>
    }]

    return (
      <div>
        <h1>Titles</h1>
        <ReactTable
          data={data}
          columns={columns}
        />
      </div>
    );
  }
}

TitlesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  titlespage: makeSelectTitlesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
