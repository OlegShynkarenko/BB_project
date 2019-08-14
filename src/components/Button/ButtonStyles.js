const buttonStyles = {
  general: {
    background: 'transparent',
    border: 'none',
    color: 'white',
    outline: 'none',
    cursor: 'pointer',
    font: 'inherit',
    padding: '10px',
    margin: '10px',
    fontWeight: 'bold',
    '&:first-of-type': {
      marginLeft: 0,
      paddingRight: 0
    },
  },
  success: {
    color: '#5C9210'
  },
  danger: {
    color: '#f20005'
  }
}

export default buttonStyles;