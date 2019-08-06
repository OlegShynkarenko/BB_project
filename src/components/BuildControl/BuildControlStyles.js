const buildControlStyles = {
  buildControl: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '5px 0'
  },
  label: {
    padding: '10px',
    fontWeight: 'bold',
    width: '80px'
  },
  button: {
    display: 'block',
    font: 'inherit',
    padding: '5px',
    margin: '0 5px',
    width: '80px',
    border: '1px solid #AA6817',
    cursor: 'pointer',
    outline: 'none',
    '&:disabled': {
      backgroundColor: '#AC9980',
      border: '1px solid #7E7365',
      color: '#ccc',
      cursor: 'default',
    },
    '&:hover:disabled': {
      background: '#AC9980',
      color: '#ccc',
      cursor: 'not-allowed'
    }
  },
  less: {
    background: '#D39952',
    color: 'white',
    '&:hover': {
      background: '#DAA972',
      color: 'white'
    },
    '&:active': {
      background: 'green'
    }
  },
  more: {
    background: '#8F5E1E',
    color: 'white',
    '&:hover': {
      background: '#99703F',
      color: 'white'
    },
    '&:active': {
      background: 'green'
    }
  },
};

export default buildControlStyles;