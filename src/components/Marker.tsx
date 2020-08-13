import React from 'react';
import L from 'leaflet';
import { Marker as LeafletMarker } from 'react-leaflet';
import { makeStyles } from '@material-ui/core';

interface IProps {
	position: L.LatLng | [number, number],
	number: number
}

const useStyles = makeStyles({
	icon: {
		height: number => `${number > 100000 ? '48px' : '36px'} !important`,
		width: number => `${number > 100000 ? '48px' : '36px'} !important`,
		borderRadius: "50%",
		background: "#ff000045",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: 'white'
	}
})

const Marker = (props: IProps) => {
	const { position, number } = props;
	const classes = useStyles(number);
	const icon = new L.DivIcon({
		className: classes.icon,
		html: `<div>${number}</div>`
	})
	
	return (
		<LeafletMarker position={position} icon={icon} />
	)
};

export default Marker;