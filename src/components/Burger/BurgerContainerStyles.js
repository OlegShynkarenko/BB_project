const burgerContainerStyles = {
  width: 450,
  margin: "0 auto",
  overflow: "auto",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1.2rem",
  paddingTop: 100,
  boxSizing: "border-box",
  "@media (max-width: 700px)": {
    width: 350,
    height: 400
  },
  "@media (max-width: 370px)": {
    width: "100%",
    height: 400
  }
};

export default burgerContainerStyles;
