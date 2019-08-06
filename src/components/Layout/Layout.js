import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import styles from './LayoutStyles'

const layout = (props) => {
  return(
    <>
      <div>Toolbar</div>
      <div>Sidebar</div>
      <div>Backdrop</div>
      <main css={styles[".main-content-block"]}>
        {props.children}
      </main>
    </>
  )
}

export default layout;