/** @jsx jsx */
import { jsx } from '@emotion/core';

import styles from './ToolbarStyles';

export const Toolbar = props => (
    <header css={styles.general}>
      <div>Menu</div>
      <div>Logo</div>
      <nav>Nav</nav>
    </header>
);
