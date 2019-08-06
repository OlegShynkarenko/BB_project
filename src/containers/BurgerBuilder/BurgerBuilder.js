import React, {Component} from 'react';

import { Burger } from "../../components/Burger/Burger";

export class BurgerBuilder extends Component {
  render() {
    return (
        <>
          <Burger />
          <div>Burger Builder Controls</div>
        </>
    )
  }
}

