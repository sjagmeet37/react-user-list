import Card from "../card/Card";
import style from "./UserList.module.css";
import { Fragment } from "react";

function UserList(props) {
  props.userList.map((user) => {
    return <li>user.name</li>;
  });

  return (
    <Fragment>
    <Card>
      <div className={style.users}>
        <ul>
          {props.userList.map((user) => {
            return (
              <li key={user.id}>
                {user.name} ({user.age} year old)
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
    </Fragment>
  );
}

export default UserList;
