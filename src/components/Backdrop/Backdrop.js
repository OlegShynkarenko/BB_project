/** @jsx jsx */
import { jsx } from '@emotion/core';

import styles from './BackdropStyles';

export const Backdrop = props => (
    props.show ? <div onClick={props.hide} className='backdrop' css={styles}></div> : null
);
