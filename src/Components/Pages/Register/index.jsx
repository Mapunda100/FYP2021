import React, { useState } from 'react'
import ParentInformation from './Birth/ParentInformation'
import PersonalInformation from './Birth/PersonalInformation'

export default function RegisterMain() {
    const [formNumber, setFormNumber] = useState(1)
    const [personalInformations, setPersonalInformatins] = useState({})
    // const [parentInformations, setParentInformatins] = useState({})

    return (
        <>
            <div class="sidenav bg-info">
                <a className='bg-primary' href="/form">Register Birth</a>
                <a className='bg-primary' href="#">Register Death</a>
                <a className='bg-primary' href="#">Register Marriage</a>
                <a className='bg-primary' href="/">Logout</a>
            </div>

            {/* <div class="main">
                {formNumber === 1 &&
                    <PersonalInformation setFormNumber={setFormNumber} setPersonalInformatins={setPersonalInformatins} />
                }
                {formNumber === 2 &&
                    <ParentInformation setFormNumber={setFormNumber} personalInformations={personalInformations} setPersonalInformatins={setPersonalInformatins} />
                }
            </div> */}
        </>
    )
}
