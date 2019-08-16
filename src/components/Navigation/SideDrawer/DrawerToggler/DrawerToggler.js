/** @jsx jsx */
import { jsx } from '@emotion/core';

import style from './DrawerTogglerStyle';

export const DrawerToggler = (props) => {
  return (
    <div css={style} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}