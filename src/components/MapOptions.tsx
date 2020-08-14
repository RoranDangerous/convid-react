import React from 'react';
import ReactDOM from 'react-dom';
import store from 'redux/store';
import { Provider } from 'react-redux';

import { connect } from 'react-redux';
import { toggleFullScreenMap } from 'redux/actions';
import { IState } from 'redux/types';

import { withLeaflet, MapControl, MapControlProps } from 'react-leaflet';
import L from 'leaflet';

import { Button, makeStyles } from '@material-ui/core';
import { Fullscreen, FullscreenExit } from '@material-ui/icons';


class MapOptions extends MapControl<MapControlProps> {
  createLeafletElement(opts: MapControlProps) {
    const MapOptions = L.Control.extend({
      onAdd: (map: any) => {
        let controlsDiv = L.DomUtil.create('div', 'map-options');
        ReactDOM.render(
          <Provider store={store}>
            <Controls />
          </Provider>,
          controlsDiv
        );
        return controlsDiv;
      }
    });
    return new MapOptions({ position: this.props.position || 'topright'});
  }
};

const mapDispatch = { toggleFullScreenMap };
const mapState = (state: IState) => ({ fullScreen: state.fullScreen });

type Props = ReturnType<typeof mapState> & typeof mapDispatch
const Controls = connect(mapState, mapDispatch)((props: Props) => {
  const classes = useStyles();
  const { fullScreen, toggleFullScreenMap } = props;

  return (
    <>
      <Button className={classes.toggle} onClick={toggleFullScreenMap}>
        {
          fullScreen ?
          <FullscreenExit/> :
          <Fullscreen/>
        }
      </Button>
    </>
  )
});

const useStyles = makeStyles({
  toggle: {
    color: '#ffffff80',
    background: '#383838',
    minWidth: 'unset',
    '&:hover': {
      background: '#38383880'
    }
  }
});


export default withLeaflet(MapOptions);