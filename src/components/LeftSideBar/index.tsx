import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IState } from 'redux/types';
import { setCountry } from 'redux/actions';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { addCommas } from 'utils';
import useStyles from './styles';

const mapState = (state: IState) => ({ countries: state.countries, total: state.total, open: !state.fullScreen });
const mapDispatch = (dispatch: ThunkDispatch<IState, void, Action>) => ({ setCountry: (country: string | null) => dispatch(setCountry(country)) })


const LeftSideBar = (props: ReturnType<typeof mapState>) => {
  const { open } = props;
  const classes = useStyles(open);

  return (
    <Drawer className={classes.drawer} variant='persistent' anchor='left' open={open}>
      <Content />
    </Drawer>
  )
}

const connector = connect(mapState, mapDispatch);
const Content = connector((props: ConnectedProps<typeof connector>) => {
  const { countries, total, setCountry } = props;
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.total} onClick={() => setCountry(null)}>
        <Typography variant='h5' align={'center'}>Total Cases</Typography>
        <Typography variant='h3' align={'center'}>{addCommas(`${total?.cases || '-'}`)}</Typography>
      </div>
      <List className={classes.list}>
      {
        Object.values(countries).map(v => (
          <ListItem button key={v.country} onClick={() => setCountry(v.country)}>
            <ListItemText
              primary={v.country}
              primaryTypographyProps={{
                className: classes.countryName
              }}
              secondary={addCommas(`${v.cases || '-'}`)}
              secondaryTypographyProps={{
                variant: 'h6',
                className: classes.countryTotal
              }}
            />
          </ListItem>
        ))
      }
      </List>
      <div className={classes.date}>
        <Typography align='center'>Last Updated at</Typography>
        <Typography variant='h6' align='center'>{total.updated ? (new Date(total.updated)).toLocaleString() : '-'}</Typography>
      </div>
    </div>
  )
})

export default connect(mapState)(LeftSideBar);