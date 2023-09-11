import React from "react";
import { useLocalStorage } from './useLocalStorage'

function useTodos() {
    const {
      item: todos, 
      saveItem: saveTodos, 
      sincronizeItem: sincronizeTodos,
      loading,
      error, 
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
  
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
  
    const searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  
    const getNewTodoIndx = (newTodos, text) => {
      return newTodos.findIndex(todo => todo.text === text)
    }

    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false
      })
      saveTodos(newTodos)
    }
  
    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = getNewTodoIndx(newTodos, text)
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos)
    }
  
    const delteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = getNewTodoIndx(newTodos, text)
      newTodos.splice(todoIndex,1)
      saveTodos(newTodos)
    }

    const toggleModal = () => {
      setOpenModal(!openModal)
    }

    return {
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      delteTodo,
      openModal,
      setOpenModal,
      toggleModal,
      addTodo,
      sincronizeTodos
    }
}

export { useTodos };
