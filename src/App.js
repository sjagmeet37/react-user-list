import React, { useState } from 'react';
import UserForm from './component/userform/UserForm';
import UserList from './component/userlist/UserList';


function App() {

  const [userList, addUserToList] = useState([]);

  const addUser = (user) => {
      addUserToList( (prevState) => {
        user['id'] = Math.random().toString();
        prevState.push(user);
        return [...prevState]; 
      });

      console.log(userList);
  };

  return (
    <div>
      <UserForm addUser={addUser}/>
      <UserList userList={userList} />
    </div>
    
  );
}

export default App;
