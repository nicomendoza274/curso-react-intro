import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'

function AppUI({
    loading,
    error,
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
            {loading && <p>Estamos cargando...</p>}
            {error && <p>Hay uun Error!!!</p>}
            {(!loading && searchedTodos.length === 0) && <p>¡Crea tu primer TODO!</p>}
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