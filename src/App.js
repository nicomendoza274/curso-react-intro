import React from 'react';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar el curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALAL', completed: false },
  { text: 'Usar estados derivados', completed: true },
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
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
    setTodos(newTodos)
  }

  const delteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = getNewTodoIndx(newTodos, text)
    newTodos.splice(todoIndex,1)
    setTodos(newTodos)
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
