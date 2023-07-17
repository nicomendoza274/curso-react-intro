import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStora } from './useLocalStorage'

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Tomar el curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALAL', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));  
// localStorage.removeItem('TODOS_V1');


function App() {
  const [todos, saveTodos] = useLocalStora('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

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

  return (
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      delteTodo={delteTodo}
    />
  )
}


export default App;
