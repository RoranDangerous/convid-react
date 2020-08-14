import React from 'react';
import { connect } from 'react-redux';
import L from 'leaflet';
import { Map as LeafletMap, TileLayer, ZoomControl } from 'react-leaflet';
import { IState } from 'redux/types';
import Marker from './Marker';

const mapState = (state: IState) => ({ countries: state.countries });

const config = {
	center: new L.LatLng(0, 0),
	zoom: 2,
	maxZoom: 6,
	minZoom: 2,
	maxBounds: new L.LatLngBounds(new L.LatLng(90, -180), new L.LatLng(-90, 180)),
	maxBoundsViscosity: 1.0,
	zoomControl: false
}

type Props = ReturnType<typeof mapState>;

const Map: React.FC<Props> = props => {
	const { countries } = props;

	return (
		<LeafletMap {...config} className='map'>
			<TileLayer
				attribution='Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
				url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
			/>
			{
				Object.values(countries).map((v: any, i: number) => <Marker key={i} position={[v.countryInfo?.lat, v.countryInfo?.long]} number={v.cases}/>)
			}
			<ZoomControl position='bottomright' />
		</LeafletMap>
	)
}

export default connect(mapState)(Map);