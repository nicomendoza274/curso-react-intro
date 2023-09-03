import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

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