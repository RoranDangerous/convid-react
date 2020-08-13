import React from 'react';
import { connect } from 'react-redux';
import Map from 'components/Map';
import { fetchCountries } from 'redux/actions';
import { bindActionCreators, Dispatch } from 'redux';

const mapDispatch = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      fetchCountries
    },
    dispatch
  )
}

export default connect(null, mapDispatch)(({fetchCountries}) => {
  React.useEffect(fetchCountries, [fetchCountries]);

  return <Map/>
});