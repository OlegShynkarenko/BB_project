/** @jsx jsx */
import { jsx } from '@emotion/core';

import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './LogoStyles';

export const Logo = props => (
    <div css={styles}>
      <img src={burgerLogo} alt='burger log'/>
    </div>
);