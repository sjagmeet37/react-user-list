import Card from "../card/Card";
import style from "./UserList.module.css";

function UserList(props) {
  props.userList.map((user) => {
    return <li>user.name</li>;
  });

  return (
    <Card>
      <div className={style.users}>
        <ul>
          {props.userList.map((user) => {
            return (
              <li id={user.id}>
                {user.name} ({user.age} year old)
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
}

export default UserList;
