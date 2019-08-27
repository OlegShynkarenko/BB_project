import React, {Component} from 'react';
import Spinner from "@atlaskit/spinner";

import { Burger } from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummaryModal from "../../components/Burger/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from '../../firebase/axios';
import WithErrorHandler from '../../components/HOC/withErrorHandler';

const INGREDIENTS_PRICE = {
  salad: 0.3,
  bacon: 0.7,
  cheese: 0.6,
  meat: 1.3
};

class BurgerBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: 0,
    isPurchasable: false,
    isPurchasing: false,
    isLoading: false,
    error: false
  };

  componentDidMount() {
    this.fetchIngredients();
  }

  fetchIngredients = async () => {
    try {
      const request = await axios.get('/ingredients.json');
      this.setState({ingredients: request.data});
    } catch (e) {
      console.log('Something went wrong', e);
      this.setState({error: true});
    }
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
  };

  hidePurchasingModalHandler = () => {
    this.setState({isPurchasing: false})
  };

  continuePurchasingHandler = () => {
    this.setState(() => {
      return {isLoading: true}
    });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      deliveryType: 'fastest',
      customerInfo: {
        name: 'Oleg',
        address: 'UK',
        zip: '00000'
      }
    }
    axios.post('/orders.', order)
        .then(res => {
          console.log(res);
          this.setState((prevState) => {
            return {
              isLoading: !prevState.isLoading,
              isPurchasing: !prevState.isPurchasing,
            }
          });
        })
        .catch(e => {
          console.log(e)
          this.setState((prevState) => {
            return {
              isLoading: !prevState.isLoading,
              isPurchasing: !prevState.isPurchasing,
            }
          });
        });
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
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

    if (this.state.ingredients) {
      burger = (
          <>
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
      );
      orderSummary = <OrderSummary ingredients={this.state.ingredients} totalSum={this.state.totalPrice}/>;
    }

    if (this.state.isLoading) {
      orderSummary = (<div style={{textAlign: 'center'}}><Spinner size="large"/></div>)
    }

    return (
        <>
          <OrderSummaryModal show={this.state.isPurchasing} hide={this.hidePurchasingModalHandler} continue={this.continuePurchasingHandler}>
            {orderSummary}
          </OrderSummaryModal>
          {burger}
        </>
    )
  }
}

export default WithErrorHandler(BurgerBuilder, axios);