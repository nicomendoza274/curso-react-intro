import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { EditIcon } from '../TodoIcon/EditIcon'
import './TodoItem.css';
function TodoItem({text, completed, onComplete, onDelete, onEdit}) {
    return (
        <li className="TodoItem">
            <CompleteIcon 
                completed={completed} 
                onComplete={onComplete}/>
            <p 
                className={`TodoItem-p ${completed && 
                'TodoItem-p--complete'}`}>{text}</p>
            <EditIcon
                onEdit={onEdit}
            />
            <DeleteIcon 
                onDelete={onDelete}
            />
        </li>
    );
}

export { TodoItem };
