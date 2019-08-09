/** @jsx jsx */
import { jsx } from '@emotion/core';

import { BurgerIngredients } from "../BurgerIngridients/BurgerIngredients";
import burgerContainerStyles from "./BurgerContainerStyles";

export const Burger = ( props ) => {

  let ingredientsTypes = Object.keys(props.ingredients)
      .map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_, i) => {
          return <BurgerIngredients type={ingredient} key={ingredient + i}/>
        })
      }).reduce((accum, currentElement) => {
        return accum.concat(currentElement)
      });

  if (ingredientsTypes.length === 0) {
    ingredientsTypes = <p>Please add your ingredients...</p>
  }

  return (
    <div css={burgerContainerStyles}>
      <BurgerIngredients type='bread-top'/>
        {ingredientsTypes}
      <BurgerIngredients type='bread-bottom'/>
    </div>
  )
};