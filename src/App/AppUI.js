import React from 'react'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoForm } from '../TodoForm'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { TodoContext } from '../TodoContext'
import { TodoHeader } from '../TodoHeader'
import { Modal } from '../Modal'

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        delteTodo,
        openModal,
        totalTodos,
        completedTodos,
        searchValue, 
        setSearchValue,
        toggleModal,
        addTodo, 
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <>
            <TodoHeader>
                <TodoCounter 
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList>
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
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
    
            <CreateTodoButton toggleModal={toggleModal} />

            { openModal && (
                <Modal>
                    <TodoForm 
                        addTodo={addTodo}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            ) }
        </>
    );
}

export { AppUI };