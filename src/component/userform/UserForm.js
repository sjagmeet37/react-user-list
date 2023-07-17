import { useState } from "react";
import Card from "./../card/Card.js";
import styles from "./UserForm.module.css";
import Button from "../Button/Button.js";

const defaultValues = {
  name: "",
  age: "",
};

function UserForm(props) {
  const [userData, setUserData] = useState(defaultValues);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.addUser(userData);
    props.showModal();
  };

  const formCHangeHandler = (field, value) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler} className={styles.input}>
        <div>
          <label>User Name</label>
          <input
            value={userData.name}
            onChange={(event) => formCHangeHandler("name", event.target.value)}
            type="text"
          ></input>
        </div>

        <div>
          <label>Age</label>
          <input
            value={userData.age}
            onChange={(event) => formCHangeHandler("age", event.target.value)}
            type="number"
          ></input>
        </div>
        <Button type="submit" name="Add User" buttonClickHandler="" />
      </form>
    </Card>
  );
}

export default UserForm;
