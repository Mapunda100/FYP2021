import axios from 'axios'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'


function Sigup() {

    const nameRef = useRef()
    const emailRef = useRef()
    const dateRef = useRef()
    const phonenumberRef = useRef()
    const passwordRef = useRef()
    // const idRef = useRef()



    function registerUser(e) {
        e.preventDefault();
        const user = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            // date: dateRef.current.value,
            phonenumber: phonenumberRef.current.value,
            password: passwordRef.current.value,
            // _id: idRef.current.value
        }

        console.log(user)

        axios.post('http://localhost:3002/signup', {
            user
        }).then(data => {
            console.log(data)
        })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className='pt-3 h-50'>
            <h2 className='text-center'>Sign up</h2>
            <div className='container jumbotron pt-4 pb-2 w-50 bg-info text-white'>
                <form onSubmit={registerUser}>
                    <div class="form-group row ">
                        <label class="col-sm-2 col-form-label">UserName</label>
                        <div class="col-sm-10">
                            <input ref={nameRef} type="text" class="form-control" />
                        </div>
                    </div>

                    <div class="form-group row ">
                        <label class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input ref={emailRef}  class="form-control" />
                        </div>
                    </div>
{/* 
                    <div class="form-group row ">
                        <label class="col-sm-2 col-form-label">Date</label>
                        <div class="col-sm-10">
                            <input ref={dateRef} type='Date' class="form-control" />
                        </div>
                    </div> */}

                    <div class="form-group row ">
                        <label class="col-sm-2 col-form-label">Phone No</label>
                        <div class="col-sm-10">
                            <input ref={phonenumberRef}  class="form-control" />
                        </div>
                    </div>


                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input ref={passwordRef}  class="form-control" />
                        </div>
                    </div>
{/* 
                    <div class="form-group row ">
                        <label class="col-sm-2 col-form-label">ID</label>
                        <div class="col-sm-10">
                            <input ref={idRef}  class="form-control" />
                        </div>
                    </div> */}

                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button style={{ marginLeft: 185 }} type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </div>

                    <div class="row d-flex justify-content-end">
                        <div class="col-auto">
                            <p>Already have an account? <Link to='login'>Login</Link> </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Sigup
