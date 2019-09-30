import React from "react";

import { Burger } from "../../Burger/Burger";
import { Button } from "../../Button/Button";

export const CheckoutSummary = props => {
  return (
    <div>
      <h1>You order is the burger below</h1>
      <div style={{ width: "300px", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button type="danger">Cancel</Button>
      <Button type="success">Continue</Button>
    </div>
  );
};
