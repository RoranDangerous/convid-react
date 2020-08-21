import { makeStyles } from '@material-ui/core';

const drawerWidth = '325px';
export default makeStyles({
  drawer: {
    '& .MuiBackdrop-root':{
      background: 'rgba(0,0,0,0.2)'
    },
    '& .MuiDrawer-paperAnchorDockedLeft': {
      borderRight: '1px solid rgb(0 0 0 / 75%)'
    }
  },
  content: {
    width: drawerWidth,
    background: '#1f1f1f',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  total: {
    width: '100%',
    padding: '1.5rem',
    borderBottom: '1px solid #ffffff1a',
    '&:hover': {
      cursor: 'pointer',
      background: 'rgba(255, 255, 255, 0.025)'
    },
    '& > h5': {
      color: '#ffffffc4',
    },
    '& > h3': {
      color: 'red',
    }
  },
  list: {
    color: '#ffffffc4',
    flexGrow: 1,
    overflowY: 'scroll',
    '& .MuiListItem-root:not(:first-child)': {
      borderTop: '1px solid #ffffff1a'
    },
    '& .MuiListItem-root:hover': {
      background: 'rgba(255, 255, 255, 0.025)'
    },
    '& .MuiListItemText-root': {
      margin: 0
    }
  },
  countryTotal: {
    color: '#a00505'
  },
  countryName: {
    color: '#ffffffc4'
  },
  date: {
    color: '#ffffffc4',
    padding: '1rem 0',
    flexGrow: 0,
    borderTop: '1px solid #ffffff1a'
  }
})