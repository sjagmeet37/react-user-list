import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <div className={`${styles.modal}`}>
      <div className={styles.header}>
        <h2>{props.modalHeader}</h2>
      </div>
      <div className={styles.content}>{props.modalContent}</div>
      <div className={styles.actions}>
        <Button 
            type="Button"
            name="Okay" 
            onClk={props.showHideModal}
            />
      </div>
    </div>
  );
}

export default ErrorModal;
