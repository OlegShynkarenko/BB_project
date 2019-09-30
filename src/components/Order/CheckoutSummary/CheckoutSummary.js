/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Burger } from "../../Burger/Burger";
import { Button } from "../../Button/Button";
import { styles } from "./CheckoutSummaryStyles";

export const CheckoutSummary = props => {
  return (
    <div css={styles}>
      <h1>You order is the burger below</h1>
      <div style={{ width: "100%", height: "450px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <div style={{ textAlign: "right", margin: "auto", width: "430px" }}>
        <Button click={props.cancel} type="danger">
          Cancel
        </Button>
        <Button click={props.continue} type="success">
          Continue
        </Button>
      </div>
    </div>
  );
};
