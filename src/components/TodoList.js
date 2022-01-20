import {useContext} from 'react'
import DataContext from '../context/DataContext';
import Button from 'react-bootstrap/Button';

function TodoList() {

    const {todoData, setTodoData} = useContext(DataContext);
    return (
        <div>
            <div className='todo-box flex-row'>

                
                <div className='flex-column todo-item'>

                    <form action="/">
                        <div class="container">
                        <label for="title">Title: </label>
                        <input type="text" id="title" name="title" /><br /><br />
                        
                        <label for="description">Description: </label>
                        <input type="text" id="description" name="description" /><br /><br />
                        </div>        
                        <div className='flex-row'>
                            <Button variant="primary" className='todo-button-spacing'>Add To List</Button>
                        </div>
                    </form>
                </div>
                
            </div>

            <div className='todo-box flex-row'>

                
                <div className='flex-column todo-item'>
                    <h3>Task: <p className='inline-heading'>{todoData.task ? todoData.task: "Buy Gerocery"}</p></h3>
                    <p>Date Created: {new Date().toDateString()}</p>
                    <div className='flex-row'>
                    <Button variant="primary" className='todo-button-spacing'>Edit</Button>
                    <Button variant="success" className='todo-button-spacing'>Complete</Button>
                    <Button variant="danger" className='todo-button-spacing'>Remove</Button>
                    </div>
                </div>
                <div className='flex-column todo-button'>
                    
                </div>
                
            </div>
        </div>
    )
}

export default TodoList
