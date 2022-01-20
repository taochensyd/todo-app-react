import React from 'react'
import TodoList from './TodoList'
import {useContext} from 'react'
import DataContext from '../context/DataContext';

function Todo() {
    return (
        <div>
            <h1 className='heading'>Todo</h1>
            <TodoList />
        </div>
    )
}

export default Todo
