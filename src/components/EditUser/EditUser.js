import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { useToast } from "@chakra-ui/react"

import { emailValidation } from '../../services/emailValidation'
import UserServices from '../../services/UserServices'
import UserForm from '../UserForm/UserForm'

const EditUser = () => {
        const [ inputValues, setInputValues ] = useState({
            name: '', email: ''
        })
        const history = useHistory()
        const toast = useToast()
        const { id, name } = useParams()
    
        const editedUser = (event) => {
            const { name, value } = event.target;
            setInputValues({ ...inputValues, [name]: value });
        }
    
        const handleEditBtn = () => {
            const isEmailOk = emailValidation(inputValues.email)
            const editedUser = UserServices.editUser(inputValues, id)
    
            if(inputValues.name !== '' && inputValues.email !== '' && isEmailOk && editedUser) {
                toast({
                    title: "Success!",
                    description: "You created new user!",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })
                history.push('/users')
            }else {
                toast({
                    title: "ERROR!",
                    description: "Both fields must be filled!",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })
            }
        }
        return (
           <UserForm 
                title={name}
                getValues={editedUser}
                submit={handleEditBtn}
                name={inputValues.name}
                email={inputValues.email}/>
        )
}
export default EditUser
