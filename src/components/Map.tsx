import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import L from 'leaflet';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import { IState } from 'redux/types';
import Marker from './Marker';

const mapState = (state: IState) => ({ countries: state.countries });

const useStyles = makeStyles((theme: Theme) => createStyles({
		map: {
			height: "100vh",
			width: "100%"
		}
	})
)

const config = {
	center: new L.LatLng(0, 0),
	zoom: 2,
	maxZoom: 6,
	minZoom: 2,
	maxBounds: new L.LatLngBounds(new L.LatLng(90, -180), new L.LatLng(-90, 180)),
	maxBoundsViscosity: 1.0
}

type Props = ReturnType<typeof mapState>;

const Map: React.FC<Props> = props => {
	const classes = useStyles();
	const { countries } = props;

	React.useEffect(() => {
		console.log(countries)
	}, [countries])

	return (
		<LeafletMap {...config}  className={classes.map}>
			<TileLayer
				attribution='Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
				url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
			/>
			{
				Object.values(countries).map((v: any, i: number) => <Marker key={i} position={[v.countryInfo?.lat, v.countryInfo?.long]} number={v.cases}/>)
			}
		</LeafletMap>
	)
}

export default connect(mapState)(Map);