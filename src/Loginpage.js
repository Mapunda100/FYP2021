import axios from 'axios';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";


function Loginpage() {

    const usernameRef = useRef()
    const passwordRef = useRef()
    const history = useHistory()

    function Login(e){

        e.preventDefault();

        const loginInput = {
            name: usernameRef.current.value,
            password:passwordRef.current.value
        }

        // console.log(loginInput)

        axios.post('http://localhost:3002/login', {
            loginInput
        })
        .then(data=>{
            console.log(data)
            history.replace('/register')
          
        })
        .catch(err=>{
            console.log(err)
        })
    }
   

    return (
        <div>
            <h1 className='text-center'>Login</h1>
            <div className='container jumbotron pt-5 pb-2 w-50 bg-info text-white'>
                <form onSubmit={Login}>
                    <div class="form-group row ">
                        <label class="col-sm-2 col-form-label">UserName</label>
                        <div class="col-sm-8 " >
                            <input ref={usernameRef} class="form-control" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label bg-darkblue">Password</label>
                        <div className="col-sm-8 ">
                            <input ref={passwordRef} class="form-control" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button style={{ marginLeft: 185, backgroundColor:'#20D91C' }} type='submit' className='btn btn-primary' >Login</button>
                        </div>
                    </div>

                    <div class="row d-flex justify-content-end">
                        <div class="col-auto">
                            <p className='text-white'>Don't have an account? <Link to='signup'>Create Account</Link> </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Loginpage
