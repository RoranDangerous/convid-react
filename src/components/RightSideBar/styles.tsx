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
  section: {
    flexGrow: 1
  },
  title: {
    padding: '1.5rem',
    color: '#ffffffc4'
  },
  row: {
    display: 'flex',
    color: '#ffffffc4',
    padding: '0.25rem 1rem',
    '& .MuiTypography-root': {
      flexGrow: 1,
      flexBasis: '-moz-available'
    }
  }
});