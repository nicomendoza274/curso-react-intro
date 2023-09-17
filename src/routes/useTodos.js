import React from "react";
import { useLocalStorage } from './useLocalStorage'

function useTodos() {
    const {
      item: todos, 
      saveItem: saveTodos, 
      sincronizeItem: sincronizeTodos,
      loading,
      error, 
    } = useLocalStorage('TODOS_V2', []);
    const [searchValue, setSearchValue] = React.useState('');
    // const [openModal, setOpenModal] = React.useState(false);
  
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
  
    const searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  
    const getNewTodoIndex = (newTodos, id) => {
      return newTodos.findIndex(todo => todo.id === id)
    }

    const addTodo = (text) => {
      const id = newTodoId(todos)
      const newTodos = [...todos]
      newTodos.push({
        text,
        completed: false,
        id,
      })
      saveTodos(newTodos)
    }
  
    const completeTodo = (id) => {
      const newTodos = [...todos];
      const todoIndex = getNewTodoIndex(newTodos, id)
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos)
    }

    const editTodo = (id, newText) => {
      const newTodos = [...todos];
      const todoIndex = getNewTodoIndex(newTodos, id)
      newTodos[todoIndex].text = newText 
      saveTodos(newTodos)
    }
  
    const delteTodo = (id) => {
      const newTodos = [...todos];
      const todoIndex = getNewTodoIndex(newTodos, id)
      newTodos.splice(todoIndex,1)
      saveTodos(newTodos)
    }

    // const toggleModal = () => {
    //   setOpenModal(!openModal)
    // }

    const states = {
      error,
      loading,
      totalTodos,
      completedTodos,
      searchValue,
      searchedTodos,
      // openModal,
    }

    const stateUpdaters = {
      setSearchValue,
      addTodo,
      completeTodo,
      delteTodo,
      editTodo,
      // setOpenModal,
      // toggleModal,
      sincronizeTodos
    }
    
    return {states, stateUpdaters}
}

function newTodoId(todoList) {
  if (!todoList.length) {
    return 1
  }

  const idList = todoList.map(todo => todo.id)
  const idMax = Math.max(...idList)
  return idMax + 1
}

export { useTodos };
