import React, {Component} from 'react';

import { Burger } from "../../components/Burger/Burger";

export class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 2,
      cheese: 2,
      meat: 1
    }
  };

  render() {
    return (
        <>
          <Burger ingredients={this.state.ingredients}/>
          <div>Burger Builder Controls</div>
        </>
    )
  }
}

