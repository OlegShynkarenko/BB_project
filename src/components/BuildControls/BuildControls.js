/** @jsx jsx */
import { jsx } from '@emotion/core';

import BuildControl from "../BuildControl/BuildControl";
import { buildControlsStyles, orderButtonStyles } from "./BuildControlsStyles";

const labelTypes = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => {
  return (
    <div css={buildControlsStyles}>
      <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
      {labelTypes.map(item => {
        return <BuildControl
          key={item.label}
          label={item.label}
          add={() => props.addIngredient(item.type)}
          remove={() => props.removeIngredient(item.type)}
          isDisabled={props.isDisabled[item.type]}
        />
      })}
      <button disabled={props.isPurchasable} css={orderButtonStyles}>ORDER NOW</button>
    </div>
  )
};

export default buildControls;