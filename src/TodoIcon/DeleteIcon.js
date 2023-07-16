import React from 'react';
import { TodoIcon } from '.'

function DeleteIcon({onDelete}) {
    return (
        <TodoIcon 
        type="delete"
            color="gray"
            click={onDelete}
        />
    )
}

export { DeleteIcon }