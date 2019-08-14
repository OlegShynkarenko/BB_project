const navigationItemStyles = {
  margin: 0,
  boxSizing: 'border-box',
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  a: {
    color: 'white',
    textDecoration: 'none',
    height: '100%',
    padding: '16px 10px',
    borderBottom: '4px solid transparent',
    boxSizing: 'border-box',
    display: 'flex',
    '&:hover, &:active, &.active': {
      background: '#8f5c2c',
      borderBottom: '4px solid #40A4c8'
    },
  },
  active: {
    background: '#8f5c2c',
    borderBottom: '4px solid #40A4c8 !important'
  },
};

export default navigationItemStyles;