/** @jsx jsx */
import { jsx } from '@emotion/core';

import BuildControl from "../BuildControl/BuildControl";
import buildControlsStyles from "./BuildControlsStyles";

const labelTypes = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => {
  return (
    <div css={buildControlsStyles}>
      {labelTypes.map(item => {
        return <BuildControl
          key={item.label}
          label={item.label}
          add={() => props.addIngredient(item.type)}
        />
      })}
    </div>
  )
};

export default buildControls;