import React from 'react';
import { connect } from 'react-redux';
import { IState } from 'redux/types';
import {
  Drawer,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { Reorder } from '@material-ui/icons';
import { addCommas } from 'utils';
import useStyles from './styles';

const LeftSidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(true);

  return (
    <>
      <Button className={classes.toggle} onClick={() => setOpen(true)}>
        <Reorder/>
      </Button>
      <Drawer className={classes.drawer} anchor={'left'} open={open} onClose={() => setOpen(false)}>
        <Content />
      </Drawer>
    </>
  )
}

const mapState = (state: IState) => ({ countries: state.countries, total: state.total });

type ContentProps = ReturnType<typeof mapState>;

const Content = connect(mapState)((props: ContentProps) => {
  const { countries, total } = props;
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.total}>
        <Typography variant='h5' align={'center'}>Total Cases</Typography>
        <Typography variant='h3' align={'center'}>{addCommas(`${total?.cases || '-'}`)}</Typography>
      </div>
      <List className={classes.list}>
      {
        Object.values(countries).map(v => (
          <ListItem button key={v.country}>
            <ListItemText
              primary={v.country}
              primaryTypographyProps={{
                variant: 'h6',
                className: classes.countryName
              }}
              secondary={addCommas(`${v.cases || '-'}`)}
              secondaryTypographyProps={{
                variant: 'h5',
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

export default LeftSidebar;