import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import styles from './LayoutStyles';
import { Toolbar } from "../Navigation/Toolbar/Toolbar";

const layout = (props) => {
  return(
    <>
      <Toolbar />
      <div>Sidebar</div>
      <main css={styles[".main-content-block"]}>
        {props.children}
      </main>
    </>
  )
}

export default layout;