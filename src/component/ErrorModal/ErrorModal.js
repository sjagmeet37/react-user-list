import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <div className={`${styles.modal}`}>
      <div className={styles.header}>
        <h2>. header</h2>
      </div>
      <div className={styles.content}>sdfsdf</div>
      <div className={styles.actions}>
        <Button 
            type="Button"
            name="Okay" 
            onClick=""
            />
      </div>
    </div>
  );
}

export default ErrorModal;
