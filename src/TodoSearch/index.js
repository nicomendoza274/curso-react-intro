import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const {
        searchValue, 
        setSearchValue
    } = React.useContext(TodoContext)

    return (
        <input 
            placeholder="Buscar una tarea"
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                const value = event.target.value
                setSearchValue(value)
            }}
        />
    );
}

export { TodoSearch };