import React from 'react'

function Todo({todo, toggleTodo}) {

    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    return (
        <div  className='mt-0'>
            <label className='jumbotron pt-1 pb-1'>
              <input type='checkbox' checked={todo.complete} onChange={handleTodoClick}></input>
              {todo.name}
            </label>
          
        </div>
    )
}

export default Todo
 