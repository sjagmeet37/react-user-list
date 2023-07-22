import { useRef} from "react";
import Card from "./../card/Card.js";
import styles from "./UserForm.module.css";
import Button from "../Button/Button.js";


function UserForm(props) {
  
  const userNameRef = useRef();
  const userAgeRef = useRef();



  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(!userNameRef.current.value) {
      props.showModal('name issue', 'name cannot be empty');
    } else if(!userAgeRef.current.value) {
      props.showModal('incorrect age', 'please enter age');
    } else if (userAgeRef.current.value < 0) {
      props.showModal('incorrect age', 'age cannot be less than 0');
    } else {
      
      props.addUser({
        name : userNameRef.current.value,
        age : userAgeRef.current.value,
        id : Math.random().toString()
      });
      userAgeRef.current.value = '';
      userNameRef.current.value = '';
    }

  };

  // const formCHangeHandler = (field, value) => {
  //   setUserData((prevState) => {
  //     return {
  //       ...prevState,
  //       [field]: value,
  //     };
  //   });
  // };

  return (
    <Card>
      <form onSubmit={onSubmitHandler} className={styles.input}>
        <div>
          <label>User Name</label>
          <input
            ref={userNameRef}
            type="text"
          ></input>
        </div>

        <div>
          <label>Age</label>
          <input
            type="number" ref={userAgeRef}
          ></input>
        </div>
        <Button type="submit" name="Add User" buttonClickHandler="" />
      </form>
    </Card>
  );
}

export default UserForm;
