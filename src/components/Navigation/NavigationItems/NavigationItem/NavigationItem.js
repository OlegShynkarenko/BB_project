/** @jsx jsx */
import { jsx } from '@emotion/core';

import styles from './NavigationItemStyles';

export const NavigationItem = (props) => {
  console.log(props)
  return (
      <li css={styles}>
        <a css={props.active ? styles.active : null} href='/'>{props.children}</a>
      </li>
  );
}