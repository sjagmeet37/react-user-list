import styles from "./Button.module.css";

function Button(props) {
  const buttonClickHandler = (event) => {
    props.buttonClickHandler();
  };

  return (
    <button type={props.type} className={styles.button} onClick={props.onClk}>
       {props.name}
    </button>
  );
}

export default Button;
