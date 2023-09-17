import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({toggleModal}) {

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