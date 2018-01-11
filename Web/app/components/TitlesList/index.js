/**
*
* TitlesList
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import ReactTable from 'react-table';
import LoadingIndicator from 'components/LoadingIndicator';

function TitlesList({ loading, error, titles }) {
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

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false) {
    return <span>Error loading title data!</span>;
  }

  if (repos !== false) {
    return <ReactTable data={titles} columns={columns} />;
  }

  return null;
}

TitlesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
};

export default TitlesList;
