/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { default as styles } from './BuildControlStyles'
console.log(styles)
const buildControl = (props) => (
    <div css={styles.buildControl}>
      <div css={styles.label}>{props.label}</div>
      <button css={[styles.button,styles.less]}>Less</button>
      <button css={[styles.button, styles.more]}>More</button>
    </div>
);

export default buildControl;