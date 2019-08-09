import React, {Component} from 'react';

import { Burger } from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";

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
    totalPrice: 0
  };

  addIngredientHandler = (type) => {
    const oldIngredient = this.state.ingredients[type];
    const newIngredient = oldIngredient + 1;
    const newIngredientsState = {
      ...this.state.ingredients
    };
    newIngredientsState[type] = newIngredient;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENTS_PRICE[type];

    this.setState({ingredients: newIngredientsState, totalPrice: newPrice})
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

    this.setState({ingredients: newIngredientsState, totalPrice: newPrice})
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
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
              isDisabled={disabled}
              addIngredient={this.addIngredientHandler}
              removeIngredient={this.removeIngredientHandler}
              price={this.state.totalPrice}
          />
        </>
    )
  }
}

