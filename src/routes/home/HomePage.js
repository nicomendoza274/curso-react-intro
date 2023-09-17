import React from 'react';
import { useTodos } from '../useTodos'
import { TodoHeader } from '../../ui/TodoHeader'
import { TodoCounter } from '../../ui/TodoCounter'
import { TodoSearch } from '../../ui/TodoSearch'
import { TodoList } from '../../ui/TodoList'
import { TodoItem } from '../../ui/TodoItem'
import { TodosError } from '../../ui/TodosError'
import { EmptyTodos } from '../../ui/EmptyTodos'
import { TodosLoading } from '../../ui/TodosLoading'
import { TodoForm } from '../../ui/TodoForm'
import { CreateTodoButton } from '../../ui/CreateTodoButton'
import { EmptySearchResults } from '../../ui/EmptySearchResults'
import { Modal } from '../../ui/Modal'
import { ChangeAlert } from '../../ui/ChangeAlert'

function HomePage() {
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
    openModal,
    searchValue
} = states

const {
    setOpenModal,
    completeTodo,
    addTodo, 
    delteTodo,
    setSearchValue,
    toggleModal,
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
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onEdit={() => console.log('Editar todo')}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => delteTodo(todo.text)}
                />
            )}
        </TodoList>

        <CreateTodoButton toggleModal={toggleModal} />

        { openModal && (
            <Modal>
                <TodoForm 
                    addTodo={addTodo}
                    setOpenModal={setOpenModal}
                />
            </Modal>
        ) }
        
        <ChangeAlert  
            sincronize={sincronizeTodos}
        />
    </>
  );
}


export { HomePage };
