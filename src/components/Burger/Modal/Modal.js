/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import styles from './ModalStyles';
import {Button} from "../../Button/Button";
import { Backdrop } from "../../Backdrop/Backdrop";

const Modal = props => {

  return (
    <>
      <Backdrop show={props.show} hide={props.hide}/>
      <div
          css={styles.general}
          style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
          }}
      >
        {props.children}
        <div css={styles.buttonWrapper}>
          <Button click={props.continue} type='success'>Continue</Button>
          <Button click={props.hide} type='danger'>Cancel</Button>
        </div>
      </div>
    </>
  )
};

export default React.memo(Modal, (prevProps, nextProps) => {
  return nextProps.show === prevProps.show && nextProps.children === prevProps.children
});
