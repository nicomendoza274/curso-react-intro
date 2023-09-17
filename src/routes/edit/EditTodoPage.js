import React from "react"
import { TodoForm } from '../../ui/TodoForm'
import { useTodos } from "../useTodos"
import { useLocation, useParams } from "react-router-dom"

function EditTodoPage() {
  const location = useLocation();
  const { states, stateUpdaters } = useTodos()
  const { editTodo } = stateUpdaters
  const { loading, getTodo } = states
  const params = useParams()
  const id = Number(params.id)

  let todo

  if (location.state?.todo) {
    todo = location.state.todo
  } else if (loading) {
    return <p>Cargando...</p>
  } else {    
    todo = getTodo(id)
  }

  return (
    <TodoForm 
      label="Edita tu TODO"
      defaultTodoText={todo.text}
      submitText="Editar"
      submitEvent={(newText) => editTodo(id,newText)}
    />
  )

}
export { EditTodoPage }