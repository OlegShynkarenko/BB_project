import React, {Component} from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import styles from './LayoutStyles';
import { Toolbar } from "../../components/Navigation/Toolbar/Toolbar";
import {SideDrawer} from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})
  };

  sideDrawerStateHandler = () => {
    this.setState((prevState) => {
      return  {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render() {
    return(
      <>
        <Toolbar changeDrawerState={this.sideDrawerStateHandler}/>
        <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler}/>
        <main css={styles[".main-content-block"]}>
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout;