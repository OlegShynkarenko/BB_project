/** @jsx jsx */
import { jsx } from '@emotion/core';

import { default as styles } from './BuildControlStyles'

const buildControl = (props) => (
    <div css={styles.buildControl}>
      <div css={styles.label}>{props.label}</div>
      <button onClick={props.remove} disabled={props.isDisabled} css={[styles.button,styles.less]}>Less</button>
      <button onClick={props.add} css={[styles.button, styles.more]}>More</button>
    </div>
);

export default buildControl;