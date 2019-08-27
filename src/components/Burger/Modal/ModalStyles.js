const modal = {
  general: {
    position: 'fixed',
    zIndex: '500',
    background: 'white',
    width: '70%',
    border: '1px solid #ccc',
    boxShadow: '1px 1px 1px black',
    padding: '16px',
    left: '15%',
    top: '30%',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease-out',
    '@media (min-width: 600px)': {
      width: '500px',
      left: 'calc(50% - 250px)'
    }
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

export default modal;
