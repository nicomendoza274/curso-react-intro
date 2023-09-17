import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useTodos } from '../useTodos'
import { TodoHeader } from '../../ui/TodoHeader'
import { TodoCounter } from '../../ui/TodoCounter'
import { TodoSearch } from '../../ui/TodoSearch'
import { TodoList } from '../../ui/TodoList'
import { TodoItem } from '../../ui/TodoItem'
import { TodosError } from '../../ui/TodosError'
import { EmptyTodos } from '../../ui/EmptyTodos'
import { TodosLoading } from '../../ui/TodosLoading'
import { CreateTodoButton } from '../../ui/CreateTodoButton'
import { EmptySearchResults } from '../../ui/EmptySearchResults'
import { ChangeAlert } from '../../ui/ChangeAlert'

function HomePage() {
  const navigate = useNavigate()
  const {
    states,
    stateUpdaters
  } = useTodos()

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue
  } = states

const {
    completeTodo,
    // addTodo, 
    delteTodo,
    setSearchValue,
    sincronizeTodos
  } = stateUpdaters

  return (
    <>
        <TodoHeader loading={loading}>
            <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        </TodoHeader>

        <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            searchText={searchValue}
            onError={() => <TodosError />}
            onLoading={() => <TodosLoading />}
            onEmptyTodos={() => <EmptyTodos />}
            onEmptySearchResults={
                (searchText) => <EmptySearchResults searchText={searchText} />
            }
        >
            {todo => (
                <TodoItem 
                    key={todo.id} 
                    text={todo.text} 
                    completed={todo.completed}
                    onEdit={() => {
                        navigate(
                            `/edit/${todo.id}`, 
                            {
                                state: { todo }
                            }
                        )
                    }}
                    onComplete={() => completeTodo(todo.id)}
                    onDelete={() => delteTodo(todo.id)}
                />
            )}
        </TodoList>

        <CreateTodoButton 
            onClick={() => navigate('/new')}
        />

        
        <ChangeAlert  
            sincronize={sincronizeTodos}
        />
    </>
  );
}


export { HomePage };
