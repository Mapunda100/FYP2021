import React, { useRef, useState, useEffect} from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todo'

function TodoMain() {

    const inputRef = useRef()

    function AddTodo(e) {
        const value = inputRef.current.value

        setTodos(prevTodo => {
            return [...prevTodo, { id: {uuidv4}, name: value, complete: false }]
        })
    }

    const [todos, setTodos] = useState([])


    useEffect(() => {
        const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodo) setTodos(storedTodo);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id) {
        const newTodo = [...todos]
        const todo = newTodo.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodo)
    }


    function clearTodo() {
        const newTodo = todos.filter(todo => todo.complete)
        setTodos(newTodo)
    }

    return (
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
            <>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <input ref={inputRef} />
            <button onClick={AddTodo}>Add Todo</button>
            <button onClick={clearTodo}>Clear completed Todo</button>
            <div>{todos.filter(todo => !todo.complete).length} left todo</div>
            </>
        </div>
    )
}

export default TodoMain
