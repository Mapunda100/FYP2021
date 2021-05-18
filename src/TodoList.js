import React from 'react'
import Todo from './Todo'

function TodoList({todos, toggleTodo}) {

       return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg  navbar-light bg-info ">

                <div class=" navbar-collapse navFont" id="navbarNavDropdown">
                    <ul class="navbar-nav text-white  ">


                        <li class="nav-item ">
                            <a class="nav-link text-white bg-primary ml-3 " href="#">HOME</a>
                        </li>

                        <li class="nav-item active">
                            <a class="nav-link text-white bg-primary ml-3" href="#">REGISTER</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white bg-primary ml-3" href="#">VIEW</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white bg-primary ml-3" href="#">CONTACT</a>
                        </li>


                    </ul>
                </div>
            </nav>
            </div>
            {todos.map(todo=>{
                return <Todo key={todo} todo={todo} toggleTodo={toggleTodo} />
            })}
        </div>
    )
}

export default TodoList
