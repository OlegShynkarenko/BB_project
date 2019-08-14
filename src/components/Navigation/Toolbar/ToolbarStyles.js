const toolbarStyles = {
  general: {
    height: '56px',
    width: '100%',
    position: 'fixed',
    color: 'white',
    top: 0,
    left: 0,
    background: '#703B09',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    boxSizing: 'border-box',
    zIndex: 90,
  },
  nav: {
    height: '100%',
    '@media(max-width: 499px)': {
      display: 'none',
    }
  },
  logo: {
    height: '80px',
  }
};

export default toolbarStyles;