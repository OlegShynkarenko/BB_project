export const buildControlsStyles = {
  width: "100%",
  background: "#cf8f2e",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 2px 1px #ccc",
  margin: "auto",
  padding: "10px 0"
};

export const orderButtonStyles = {
  background: "#DAD735",
  outline: "none",
  cursor: "pointer",
  border: "1px solid #966909",
  color: "#966909",
  fontFamily: "inherit",
  fontSize: "1.2em",
  padding: "15px 30px",
  boxShadow: "2px 2px 2px #966909",
  "&:hover, &:active": {
    backgroundColor: "#A0DB41",
    border: "1px solid #966909",
    color: "#966909"
  },
  "&:disabled": {
    backgroundColor: "#C7C6C6",
    cursor: "not-allowed",
    border: "1px solid #ccc",
    color: "#888888"
  },
  "&:not(:disabled)": {
    animation: "enable 0.3s linear"
  },
  "@keyframes enable": {
    "0%": {
      transform: "scale(1)"
    },
    "60%": {
      transform: "scale(1.1)"
    },
    "100%": {
      transform: "scale(1)"
    }
  }
};
