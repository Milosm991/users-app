import React, { useState } from 'react'

import UserForm from '../UserForm/UserForm'

const EditUser = () => {
        const [edit] = useState(true)
        
        return (
           <UserForm edit/>
        )
}
export default EditUser
