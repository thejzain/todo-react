import React from 'react'

export default function Todo({todo, toggleTodo}) {
    
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    return (
    <div>
        <label>
            <input onChange={handleTodoClick} type={"checkbox"} checked={todo.complete}></input>
            {todo.name}
        </label>
    </div>
  )
}
