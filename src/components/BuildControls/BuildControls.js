import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import BuildControl from "../BuildControl/BuildControl";
import buildControlsStyles from "./BuildControlsStyles";

const buildControls = (props) => {
  return (
    <div css={buildControlsStyles}>
      <BuildControl/>
    </div>
  )
};

export default buildControls;