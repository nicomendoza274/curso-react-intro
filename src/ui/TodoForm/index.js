import React from 'react';
import './TodoForm.css'
import { useNavigate } from 'react-router-dom';

function TodoForm(props) {
    const navigate = useNavigate()
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newTodoValue);
        navigate('/')
    }

    const onCancel = () => {
        navigate('/')
        // setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    } 

    return (
        <form onSubmit={onSubmit}>
            <label>{ props.label }</label>
            <textarea 
                placeholder='Ingrese un nombre' 
                value={newTodoValue} 
                onChange={onChange}
                autoFocus 
                required
            >
            </textarea>
            <div className='TodoForm-buttonContainer'>
            <button type='button' onClick={onCancel} className='TodoForm-button TodoForm-button--cancel'>Cancelar</button>
            <button type='submit' className='TodoForm-button TodoForm-button--add'>{props.submitText}</button>
            </div>
        </form>
    );
}

export { TodoForm };