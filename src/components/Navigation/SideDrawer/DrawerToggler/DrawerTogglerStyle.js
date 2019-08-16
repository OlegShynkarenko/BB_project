const drawerTogglerStyle = {
  width: '40px',
  height: '100%',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '10px 0',
  boxSizing: 'border-box',
  cursor: 'pointer',
  div: {
    width: '90%',
    height: '3px',
    background: 'white'
  },
  '@media (min-width: 500px)': {
    display: 'none'
  }
};

export default drawerTogglerStyle;