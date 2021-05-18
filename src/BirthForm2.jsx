import React from 'react'
import { Link } from 'react-router-dom'

function BirthForm2() {
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

            <h2 className='mt-4'>Register person's Parents information here</h2>
            <div className='jumbotron pt-1 mt-2 ml-5 text-white bg-success'>
                <form className='pt-4 pl-5'>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputEmail">MOTHER INFORMATION::: First Name:</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputPassword4">Middle Name:</label>
                            <input type="text" class="form-control" id="inputPassword4" />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputPassword4">Last Name:</label>
                            <input class="form-control" id="inputPassword4" />
                        </div>
                        </div>
                        <button className='btn btn-warning float-left'>Search</button>
                        </form>

                        <form className='pt-5 pl-5'>
                        <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputEmail">FATHER INFOMATION::: First Name:</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputPassword4">Middle Name:</label>
                            <input type="text" class="form-control" id="inputPassword4" />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputPassword4">Last Name:</label>
                            <input class="form-control" id="inputPassword4" />
                        </div>                   
                        </div>
                        <button className='btn btn-warning float-left'>Search </button>

                        <button className='btn btn-primary float-right'><Link to='birth3'>NEXT</Link></button>
                        
                        </form>
                    </div>
        </div>
    )
}

export default BirthForm2
