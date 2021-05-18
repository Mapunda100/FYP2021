import React, { useState } from 'react'
import BirthInfo from './Birth/BirthInfo'
import ParentInformation from './Birth/ParentInformation'
import PersonalInformation from './Birth/PersonalInformation'



function Form() {

    const [formNumber, setFormNumber] = useState(1)
    const [personalInformations, setPersonalInformations] = useState({})

    return (
        <div>
            <div class="main">
                {formNumber === 1 &&
                    <PersonalInformation setFormNumber={setFormNumber} setPersonalInformations={setPersonalInformations} />
                }
                {formNumber === 2 &&
                    <ParentInformation setFormNumber={setFormNumber} personalInformations={personalInformations} setPersonalInformations={setPersonalInformations} />
                }

                {formNumber === 3 &&
                    <BirthInfo  personalInformations={personalInformations} setPersonalInformations={setPersonalInformations} />
                }
            </div>
        </div>
    )
}

export default Form
