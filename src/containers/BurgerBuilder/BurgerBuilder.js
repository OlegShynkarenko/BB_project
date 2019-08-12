import React, {Component} from 'react';

import { Burger } from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import {Backdrop} from "../../components/Backdrop/Backdrop";

const INGREDIENTS_PRICE = {
  salad: 0.3,
  bacon: 0.7,
  cheese: 0.6,
  meat: 1.3
};

export class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    isPurchasable: false,
    isPurchasing: false
  };

  updatePurchaseStatus = () => {
    const ingredients = {
      ...this.state.ingredients
    }
    const sum = Object.values(ingredients).reduce((accum, currentValue) => {
      return accum + currentValue
    });
    this.setState({isPurchasable: sum > 0});
  };

  showPurchasingModalHandler = () => {
    this.setState({isPurchasing: true})
  }

  hidePurchasingModalHandler = () => {
    this.setState({isPurchasing: false})
  }

  addIngredientHandler = (type) => {
    const oldIngredient = this.state.ingredients[type];
    const newIngredient = oldIngredient + 1;
    const newIngredientsState = {
      ...this.state.ingredients
    };
    newIngredientsState[type] = newIngredient;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENTS_PRICE[type];

    this.setState({ingredients: newIngredientsState, totalPrice: newPrice}, () => {
      this.updatePurchaseStatus();
    })
  };

  removeIngredientHandler = (type) => {
    const oldIngredient = this.state.ingredients[type];

    if (oldIngredient === 0) {
      return
    }

    const newIngredient = oldIngredient - 1;
    const newIngredientsState = {
      ...this.state.ingredients
    };
    newIngredientsState[type] = newIngredient;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INGREDIENTS_PRICE[type];

    this.setState({ingredients: newIngredientsState, totalPrice: newPrice}, () => {
      this.updatePurchaseStatus();
    })
  };

  render() {
    const disabled = {
      ...this.state.ingredients
    };
    for (let key in disabled) {
      disabled[key] = disabled[key] <= 0
    }
    return (
        <>
          <Backdrop show={this.state.isPurchasing} hide={this.hidePurchasingModalHandler}/>
          <Modal show={this.state.isPurchasing}>
            <OrderSummary ingredients={this.state.ingredients}/>
          </Modal>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
              isDisabled={disabled}
              addIngredient={this.addIngredientHandler}
              removeIngredient={this.removeIngredientHandler}
              price={this.state.totalPrice}
              isPurchasable={!this.state.isPurchasable}
              isPurchasing={this.showPurchasingModalHandler}
          />
        </>
    )
  }
}

