/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import styles from './SideDrawerStyles';
import {Logo} from "../../Logo/Logo";
import {NavigationItems} from "../NavigationItems/NavigationItems";
import {Backdrop} from "../../Backdrop/Backdrop";

export const SideDrawer = (props) => {

  return(
      <>
        <Backdrop show={props.open} hide={props.close}/>
        <div css={[styles, props.open ? styles.open : styles.close]}>
          <div css={styles.logo}>
            <Logo/>
          </div>
          <nav>
            <NavigationItems/>
          </nav>
        </div>
      </>
  )
}