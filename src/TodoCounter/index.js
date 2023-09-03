import React from 'react';
import './TodoCounter.css';

function TodoCounter({ completedTodos,totalTodos, loading}) {

    return (
        <h1 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>
            Has compeltado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
        </h1>
    );
}

export { TodoCounter };