
import Card from './../card/Card.js'
import styles from './UserForm.module.css'

function UserForm(props) {

    const onSubmitHandler = (event) => {
        event.preventDefault();    
    }


    return (
        <Card>
        <form onSubmit={onSubmitHandler} className={styles.input}>
            <div> 
            <label>User Name</label>
            <input type="text"></input>
            </div>

            <div>
            <label>Age</label>
            <input type="number"></input>

            </div>
 
            <button type="submit" className={styles.button}>Add User</button>
        </form>
        </Card>
    );
}

export default UserForm;

