import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import styles from './AppStyles'
import Layout from '../components/Layout/Layout'
import { BurgerBuilder } from "../containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div className="app" css={styles}>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
