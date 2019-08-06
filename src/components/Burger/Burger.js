/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

import { BurgerIngredients } from "../BurgerIngridients/BurgerIngredients";
import burgerContainerStyles from "./BurgerContainerStyles";

export const Burger = ( props ) => {

  const ingredientsTypes = Object.keys(props.ingredients)
      .map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_, i) => {
          return <BurgerIngredients type={ingredient} key={ingredient + i}/>
        })
      });

  return (
    <div css={burgerContainerStyles}>
      <BurgerIngredients type='bread-top'/>
        {ingredientsTypes}
      <BurgerIngredients type='bread-bottom'/>
    </div>
  )
};