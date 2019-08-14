const sideDrawerStyles = {
  position: 'fixed',
  width: '280px',
  maxWidth: '70%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 200,
  background: 'white',
  padding: '32px 16px',
  boxSizing: 'border-box',
  transition: 'transform 0.3 ease-out',
  '@media(min-width: 500px)': {
    display: 'none'
  },
  open: {
    transform: 'translateX(0)',
  },
  close: {
    transform: 'translateX(-100%)'
  },
  logo: {
    height: '11%',
    marginBottom: '32px'
  }
};

export default sideDrawerStyles;