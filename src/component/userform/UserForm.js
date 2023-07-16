
import { useState } from 'react'
import Card from './../card/Card.js'
import styles from './UserForm.module.css'

const defaultValues = {
    name : '',
    age : ''
}

function UserForm(props) {

    const [userData, setUserData] = useState(defaultValues);


    const onSubmitHandler = (event) => {
        event.preventDefault();    

        props.addUser(userData);




    };

    const formCHangeHandler = (field, value) => {
        setUserData(prevState => {
            return {
                ...prevState,
                [field] : value
            }
        });
    };


    return (
        <Card>
        <form onSubmit={onSubmitHandler} className={styles.input}>
            <div> 
            <label>User Name</label>
            <input value={userData.name} onChange={(event) => formCHangeHandler('name', event.target.value)} type="text"></input>
            </div>

            <div>
            <label>Age</label>
            <input value={userData.age} onChange={(event) => formCHangeHandler('age', event.target.value)} type="number"></input>

            </div>
 
            <button type="submit" className={styles.button}>Add User</button>
        </form>
        </Card>
    );
}

export default UserForm;

