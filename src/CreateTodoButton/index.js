import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const {
        toggleModal
    } = React.useContext(TodoContext)

    return (
        <button 
            className='CreateTodoButton'
            onClick={(event) => {
                toggleModal()
            }}
        >+</button>
    );
}

export {CreateTodoButton};