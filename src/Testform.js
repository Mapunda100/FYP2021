import React, { useState } from 'react'

function Testform() {
    const [ formNumber, setFormNumber] = useState(1); 

    function submitForm(){
        console.log('values are submitted')
    }


    return (
        <div>
            {formNumber === 1 &&
             <form>
                 <h3>form one</h3>
                 <input type='text' placeholder='form input one'></input>
                 <input type='text' placeholder='form input one'></input>
                 <button onClick={()=>setFormNumber(2)}>NEXT</button>
             </form>
            }

            { formNumber === 2 && 
             <form>
                  <h3>form two</h3>
                 <input type='text' placeholder='form input two'></input>
                 <input type='text' placeholder='form input two'></input>
                 <button onClick={()=>setFormNumber(3)}>NEXT</button>
             </form>
            }

            {formNumber === 3 &&
            <form>
                 <h3>form Three</h3>
                 <input type='text' placeholder='form input three'></input>
                 <input type='text' placeholder='form input three'></input>
                 <button onClick={submitForm}>SUBMIT</button>
            </form>
            }
        </div>
    )
}

export default Testform
