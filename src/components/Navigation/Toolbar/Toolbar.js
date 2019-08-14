/** @jsx jsx */
import { jsx } from '@emotion/core';

import styles from './ToolbarStyles';
import {Logo} from "../../Logo/Logo";
import {NavigationItems} from "../NavigationItems/NavigationItems";

export const Toolbar = props => (
    <header css={styles.general}>
      <div>Menu</div>
      <Logo css={styles.logo}/>
      <nav css={styles.nav}>
        <NavigationItems/>
      </nav>
    </header>
);
