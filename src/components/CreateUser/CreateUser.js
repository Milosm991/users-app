import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useToast } from "@chakra-ui/react"

import { emailValidation } from '../../services/emailValidation'
import UserServices from '../../services/UserServices'
import UserForm from '../UserForm/UserForm'

const CreateUser = () => {
    const [ inputValues, setInputValues ] = useState({
        name: '', email: ''
    })
    const history = useHistory()
    const toast = useToast()

    const newUser = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    }

    const handleCreateBtn = () => {
        const isEmailOk = emailValidation(inputValues.email)
        const newUser = UserServices.createUser(inputValues)

        if(inputValues.name !== '' && inputValues.email !== '' && isEmailOk && newUser) {
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
            title='Create new user'
            getValues={newUser}
            submit={handleCreateBtn}
            name={inputValues.name}
            email={inputValues.email}/>
    )
}
export default CreateUser
