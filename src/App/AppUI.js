import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    delteTodo
}) {
    return (
        <>
            <TodoCounter 
            completed={completedTodos} 
            total={totalTodos} 
            />
            <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
    
            />
    
            <TodoList>
            {searchedTodos.map(todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => delteTodo(todo.text)}
                />
            ))}
            </TodoList>
    
            <CreateTodoButton />
        </>
    );
}

export { AppUI };