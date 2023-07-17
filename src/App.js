import React, { useState } from 'react';
import UserForm from './component/userform/UserForm';
import UserList from './component/userlist/UserList';
import ErrorModal from './component/ErrorModal/ErrorModal';
import './index.css'


function App() {

  const [userList, addUserToList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addUser = (user) => {
      addUserToList( (prevState) => {
        user['id'] = Math.random().toString();
        prevState.push(user);
        return [...prevState]; 
      });

      console.log(userList);
  };
  let modalHeader = '';
  let modalContent = '';

  const showHideModal = (header, content) => {
    if(showModal) {
      setShowModal(false);
    }
      setShowModal(true);
      modalHeader = header;
      modalContent = content;
  }



  return (
    <div className={showModal && 'backdrop'}>
      <UserForm addUser={addUser} showModal={showHideModal}/>
      <UserList userList={userList} />
      {showModal && <ErrorModal />} 
    </div>
    
  );
}

export default App;
