import React, { useState } from 'react';
import UserForm from './component/userform/UserForm';
import UserList from './component/userlist/UserList';
import ErrorModal from './component/ErrorModal/ErrorModal';
import './index.css'


function App() {

  const [userList, addUserToList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  
  const [modalHeader, setModalHeader] = useState(false);
  const [modalContent, setModalContentl] = useState(false);

  const addUser = (user) => {

      addUserToList( (prevState) => {
        prevState.push(user);
        return [...prevState]; 
      });

      console.log(userList);
  };


  const showHideModal = (header, content) => {
    setModalHeader(header);
    setModalContentl(content);    
    setShowModal(true);

  }

  const hideModal = () => {
    setShowModal(false);

  }


  return (
    <div className={showModal && 'backdrop'}>
      <UserForm addUser={addUser} showModal={showHideModal}/>
      <UserList userList={userList} />
      {showModal && <ErrorModal showHideModal={hideModal} modalHeader={modalHeader} modalContent={modalContent}/>} 
    </div>
    
  );
}

export default App;
