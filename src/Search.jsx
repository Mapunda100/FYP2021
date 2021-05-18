import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react'


function Search({ dbsearched1 }) {

    const searchRef = useRef();
    const [state, setState] = useState([]);
    const [allvalues, setAllvalues] = useState([]);


    useEffect(() => {
        console.log(state)
    }, [state])


    function getAll(e) {
        e.preventDefault();




        axios.post('http://localhost:3002/viewall')
            .then(data => {

                setAllvalues(data.data.data)


            })

            .catch(err => {
                console.log(err)
            })

    }

    function sendSearch(e) {
        e.preventDefault();
        const searchInput = searchRef.current.value;

        console.log(searchInput)

        axios.post('http://localhost:3002/search', {
            searchInput
        }

        )
            .then(data => {
                setState(data.data.data)


            })

            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div>
            <div className='jumbotron pt-1 pb-1 mt-3 w-50'>
                <input ref={searchRef} type='text' />
                <button onClick={sendSearch} type='submit' className='btn btn-success'>Search</button>
            </div>

            <label className='jumbotron pt-1'>
                <h3 className='text-info'>The status of the person</h3>
                <div className='text-danger pt-5' >id: {state._id}</div>
                <div className='text-danger'>Name: {state.name}</div>
                <div className='text-danger'>Email: {state.email}</div>
            </label>

            <div>
                <button className='btn btn-info' onClick={getAll}>VIEW ALL</button>
                <div>{allvalues.map(value => {
                    return (
                        <div className='jumbotron pt-1 pb-1 bg-success'>
                             <div>Email: {value._id}</div>
                            <div>Name: {value.name}</div>
                            <div>Email: {value.email}</div>
                           
                        </div>
                    )

                })}</div>
            </div>

        </div>
    )
}

export default Search
