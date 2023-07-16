import React from 'react';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'

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
  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  
  const [todos, setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
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

  console.log('Los usuarios buscan todos de ' + searchValue);
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


export default App;
