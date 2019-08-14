/** @jsx jsx */
import { jsx } from '@emotion/core';
import {NavigationItem} from "./NavigationItem/NavigationItem";
import styles from './NavigationItemsStyles';

export const NavigationItems = (props) => (
    <ul css={styles}>
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);