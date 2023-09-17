import React from 'react';
import { useTodos } from './useTodos'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoForm } from '../TodoForm'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { EmptySearchResults } from '../EmptySearchResults'
import { TodoHeader } from '../TodoHeader'
import { Modal } from '../Modal'
import { ChangeAlert } from '../ChangeAlert'

function App() {
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


export default App;
