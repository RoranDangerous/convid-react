import React from 'react';
import { connect } from 'react-redux';
import Map from 'components/Map';
import { fetchCountries, fetchTotal } from 'redux/actions';
import { bindActionCreators, Dispatch } from 'redux';
import LeftSidebar from 'components/LeftSidebar';

const mapDispatch = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      fetchCountries,
      fetchTotal
    },
    dispatch
  )
}

export default connect(null, mapDispatch)(({fetchCountries, fetchTotal}) => {
  React.useEffect(fetchCountries, [fetchCountries]);
  React.useEffect(fetchTotal, [fetchTotal]);

  return (
    <>
      <LeftSidebar />
      <Map/>
    </>
  )
});