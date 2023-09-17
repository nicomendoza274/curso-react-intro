import React from "react"
import { TodoForm } from '../../ui/TodoForm'
import { useTodos } from "../useTodos"
import { useParams } from "react-router-dom"

function EditTodoPage() {
  const {stateUpdaters} = useTodos()
  const { editTodo } = stateUpdaters
  const params = useParams()
  const id = Number(params.id)

  return (
    <TodoForm 
      label="Edita tu TODO"
      submitText="Editar"
      submitEvent={(newText) => editTodo(id,newText)}
    />
  )
}
export { EditTodoPage }