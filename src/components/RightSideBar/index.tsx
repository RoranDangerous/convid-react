import React from 'react';

import { connect } from 'react-redux';
import { IState } from 'redux/types';

import { Drawer } from '@material-ui/core';
import useStyles from './styles';
import Summary from './Summary';

const mapState = (state: IState) => ({ open: !state.fullScreen });

type Props = ReturnType<typeof mapState>;

const RightSidebar = (props: Props) => {
  const { open } = props;
  const classes = useStyles(open);

  return (
    <Drawer className={classes.drawer} variant='persistent' anchor='right' open={open}>
      <Content/>
    </Drawer>
  )
};

const Content = connect(mapState)((props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Summary/>
    </div>
  )
})

export default connect(mapState)(RightSidebar);