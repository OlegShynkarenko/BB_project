import React from 'react';

const OrderSummary = (props) => {
  const ingredientsSummary = Object.entries(props.ingredients).map( array => {
    return (
     <li key={array[0]+array[1]}><span style={{textTransform: 'capitalize'}}>{array[0]}: </span>{array[1]}</li>
    )
  });

  return(
    <>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredient:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p><strong>Total Summary: {props.totalSum.toFixed(2)} USD</strong></p>
      <p>Continue to checkout?</p>
    </>
  )
};

export default React.memo(OrderSummary,(prevProps, nextProps) => prevProps === nextProps);