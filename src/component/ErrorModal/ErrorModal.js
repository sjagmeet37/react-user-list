import Button from "../Button/Button";
import Card from "../card/Card";
import styles from "./ErrorModal.module.css";
import React from "react";
import { ReactDOM } from "react";

function Backdrop(props) {
  return <div className={styles.backdrop}></div>;
}

function ModalOverlay(props) {
  return (
    <Card>
      <div className={`${styles.modal}`}>
        <div className={styles.header}>
          <h2>{props.modalHeader}</h2>
        </div>
        <div className={styles.content}>{props.modalContent}</div>
        <div className={styles.actions}>
          <Button type="Button" name="Okay" onClk={props.showHideModal} />
        </div>
      </div>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      ReactDOM.createRoot(
      <Backdrop />, document.getElementById('backdrop-root'))
      ReactDOM.createRoot(
      <ModalOverlay
        showHideModal={props.showHideModal}
        modalHeader={props.modalHeader}
        modalContent={props.modalContent}
      />
      , document.getElementById('overlay-root'))
    </React.Fragment>
  );
}

export default ErrorModal;
