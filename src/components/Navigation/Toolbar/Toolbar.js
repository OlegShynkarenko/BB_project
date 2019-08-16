/** @jsx jsx */
import { jsx } from '@emotion/core';

import styles from './ToolbarStyles';
import {Logo} from "../../Logo/Logo";
import {NavigationItems} from "../NavigationItems/NavigationItems";
import {DrawerToggler} from "../SideDrawer/DrawerToggler/DrawerToggler";

export const Toolbar = props => (
    <header css={styles.general}>
      <DrawerToggler clicked={props.changeDrawerState}/>
      <Logo css={styles.logo}/>
      <nav css={styles.nav}>
        <NavigationItems/>
      </nav>
    </header>
);
