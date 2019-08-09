import {Component} from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import burgerIngredientsStyles from "./BurgerIngredientsStyles";

export class BurgerIngredients extends Component {

  handleIngredientsRender = (ingredientsType) => {
    let ingredients = null;

    switch (ingredientsType) {
      case ('bread-bottom'):
        ingredients = <div css={burgerIngredientsStyles.breadBottom}/>
        break;
      case ('bread-top'):
        ingredients = (
            <div css={burgerIngredientsStyles.breadTop}>
              <div css={burgerIngredientsStyles.seeds1}/>
              <div css={burgerIngredientsStyles.seeds2}/>
            </div>
        );
        break;
      case ('meat'):
        ingredients = <div css={burgerIngredientsStyles.meat}/>
        break;
      case ('cheese'):
        ingredients = <div css={burgerIngredientsStyles.cheese}/>
        break;
      case ('salad'):
        ingredients = <div css={burgerIngredientsStyles.salad}/>
        break;
      case ('bacon'):
        ingredients = <div css={burgerIngredientsStyles.bacon}/>
        break;
      default:
        ingredients = null;
    }
    return ingredients;
  };

  render() {
    return this.handleIngredientsRender(this.props.type)
  }
};

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
}
