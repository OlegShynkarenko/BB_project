import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import styles from './LayoutStyles';
import { Toolbar } from "../Navigation/Toolbar/Toolbar";
import {SideDrawer} from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => {
  return(
    <>
      <Toolbar />
      <SideDrawer />
      <main css={styles[".main-content-block"]}>
        {props.children}
      </main>
    </>
  )
}

export default layout;