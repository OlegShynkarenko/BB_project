/** @jsx jsx */
import { jsx } from '@emotion/core';

import styles from './ButtonStyles';

export const Button = props => (
  <button
    onClick={props.click}
    css={[styles.general, styles[props.type]]}
  >
    {props.children}
  </button>
);