import React, { Component } from "react";

import { CheckoutSummary } from "../../components/Order/CheckoutSummary/CheckoutSummary";

export class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    console.log("QUERRY", query);
    console.log("ENTRIEs", query.entries());
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
  }

  handleCheckoutContinue = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  handleCheckoutCancel = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <CheckoutSummary
        ingredients={this.state.ingredients}
        continue={this.handleCheckoutContinue}
        cancel={this.handleCheckoutCancel}
      />
    );
  }
}
