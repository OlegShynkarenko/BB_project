/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

import { BurgerIngredients } from "../BurgerIngridients/BurgerIngredients";
import burgerContainerStyles from "./BurgerContainerStyles";

export const Burger = ( props ) => {
  return (
    <div css={burgerContainerStyles}>
      <BurgerIngredients type='bread-top'/>
      <BurgerIngredients type='cheese'/>
      <BurgerIngredients type='bacon'/>
      <BurgerIngredients type='meat'/>
      <BurgerIngredients type='bread-bottom'/>
    </div>
  )
};