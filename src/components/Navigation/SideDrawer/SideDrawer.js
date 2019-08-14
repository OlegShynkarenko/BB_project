/** @jsx jsx */
import { jsx } from '@emotion/core';

import styles from './SideDrawerStyles';
import {Logo} from "../../Logo/Logo";
import {NavigationItems} from "../NavigationItems/NavigationItems";

export const SideDrawer = (props) => {
  return(
      <div css={styles}>
        <div css={styles.logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
  )
}