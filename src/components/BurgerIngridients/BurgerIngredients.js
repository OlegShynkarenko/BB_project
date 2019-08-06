import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import burgerIngredientsStyles from "./BurgerIngredientsStyles";

const burgerIngredients = (props ) => {
  let ingridients = null;

  switch (props.ingridients) {
    case ('bread-bottom'):
      ingridients = <div css={burgerIngredientsStyles.breadBottom}/>
      break;
    case ('bread-top'):
      ingridients = (
        <div css={burgerIngredientsStyles.breadTop}>
          <div css={burgerIngredientsStyles.seeds1}/>
          <div css={burgerIngredientsStyles.seeds2}/>
        </div>
      );
      break;
    case ('meat'):
      ingridients = <div css={burgerIngredientsStyles.meat}/>
      break;
    case ('cheese'):
      ingridients = <div css={burgerIngredientsStyles.cheese}/>
      break;
    case ('salad'):
      ingridients = <div css={burgerIngredientsStyles.salad}/>
      break;
    case ('bacon'):
      ingridients = <div css={burgerIngredientsStyles.bacon}/>
      break;
    default:
      ingridients = null;
  }

  return ingridients;
};

export default burgerIngredients;