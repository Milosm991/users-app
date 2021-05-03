import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useToast } from "@chakra-ui/react"

import { emailValidation, checkFormFields, validURL, checkFormat, phoneValidaton } from '../../services/emailValidation'
import { error_empty, error_email, error_url} from '../../services/notifications.js'
import UserServices from '../../services/UserServices'
import UserForm from '../UserForm/UserForm'

const CreateUser = () => {
    const [ inputValues, setInputValues ] = useState({})
    const history = useHistory()
    const toast = useToast()

    const newUser = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    }

    const handleCreateBtn = async () => {
        const { name, email, id, street, username, phone, web, company } = inputValues

        const newUser = await UserServices.createUser(inputValues)
        const isEmailOk = emailValidation(inputValues.email)
        const isFilled = checkFormFields(name, email, id, street, username, phone, web, company)
        const formatOfValues = checkFormat(name, street, username, company)
        const url = validURL(web)
        const isPhoneOk = phoneValidaton(phone) 
        
        if(!isFilled){
            toast(error_empty)
        } else if(formatOfValues.status === 'error'){
            toast(formatOfValues)
        } else if(!isEmailOk){
            toast(error_email)
        } else if(!url){
            toast(error_url)
        } else if(isPhoneOk.status === 'error'){
            toast(isPhoneOk)
        } 
        else {
            toast(newUser)
            history.push('/users')
        }
        
    }
    return (
       <UserForm 
            title='Create new user'
            getValues={newUser}
            submit={handleCreateBtn}
            name={inputValues.name}
            email={inputValues.email}
            id={inputValues.id}
            street={inputValues.street}
            username={inputValues.username}
            phone={inputValues.phone}
            web={inputValues.web}
            company={inputValues.company}/>
    )
}
export default CreateUser

// if(isFilled && isEmailOk && url && newUser) {
//     toast({
//         title: "Success!",
//         description: "You created new user!",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//     })
//     history.push('/users')
// }else {
//     toast({
//         title: "ERROR!",
//         description: "All fields must be filled!",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//     })
// }