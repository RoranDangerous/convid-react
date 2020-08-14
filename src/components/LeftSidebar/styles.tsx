import { makeStyles } from '@material-ui/core';

export default makeStyles({
  toggle: {
    position: 'fixed',
    color: '#ffffff80',
    top: '1rem',
    left: '1rem',
    zIndex: 999,
    background: '#383838',
    minWidth: 'unset',
    '&:hover': {
      background: '#38383880'
    }
  },
  drawer: {
    '& .MuiBackdrop-root':{
      background: 'rgba(0,0,0,0.2)'
    }
  },
  content: {
    width: '325px',
    background: '#1f1f1f',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  total: {
    width: '100%',
    padding: '1.5rem',
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
    '& .MuiListItem-root:hover': {
      background: 'rgba(255, 255, 255, 0.025)'
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
    flexGrow: 0
  }
})