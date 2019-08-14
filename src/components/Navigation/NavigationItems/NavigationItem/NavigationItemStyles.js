const navigationItemStyles = {
  margin: '10px 0',
  boxSizing: 'border-box',
  display: 'block',
  width: '100%',
  a: {
    color: '#8f5c2c',
    textDecoration: 'none',
    width: '100%',
    boxSizing: 'border-box',
    display: 'block',
    '&:hover, &:active, &.active': {
      color: '#40a4c8'
    },
  },
  active: {
    color: '#40a4c8 !important'
  },
  '@media(min-width: 500px)': {
    margin: 0,
    display: 'flex',
    height: '100%',
    width: 'auto',
    alignItems: 'center',
    a: {
      color: 'white',
      height: '100%',
      padding: '16px 10px',
      borderBottom: '4px solid transparent',
      '&:hover, &:active, &.active': {
        background: '#8f5c2c',
        borderBottom: '4px solid #40A4c8',
        color: 'white'
      },
    },
    active: {
      background: '#40a4c8',
      borderBottom: '4px solid #40A4c8 !important',
      color: 'white'
    },
  }
};

export default navigationItemStyles;