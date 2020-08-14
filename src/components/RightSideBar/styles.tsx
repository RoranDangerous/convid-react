import { makeStyles } from '@material-ui/core';

const drawerWidth = '500px';
export default makeStyles({
  drawer: {
    width: open => open ? drawerWidth : '0',
    '& .MuiBackdrop-root': {
      background: 'rgba(0,0,0,0.2)'
    },
    '& .MuiDrawer-paperAnchorDockedRight': {
      borderLeft: '1px solid rgb(0 0 0 / 75%)'
    }
  },
  content: {
    width: drawerWidth,
    background: '#1f1f1f',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
});