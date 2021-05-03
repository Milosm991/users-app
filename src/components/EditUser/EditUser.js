import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { useToast } from "@chakra-ui/react"

import { emailValidation, checkFormFields, validURL, checkFormat, phoneValidaton } from '../../services/emailValidation'
import { error_email, error_url, error_empty } from '../../services/notifications'
import UserServices from '../../services/UserServices'
import UserForm from '../UserForm/UserForm'

const EditUser = () => {
        const [ inputValues, setInputValues ] = useState({})
        const history = useHistory()
        const toast = useToast()
        const { id, name } = useParams()
    
        const getInputValues = (event) => {
            const { name, value } = event.target;
            setInputValues({ ...inputValues, [name]: value });
        }
    
        const handleEditBtn = async () => {
            const { name, email, street, username, phone, web, company } = inputValues

            const editedUser = await UserServices.editUser(inputValues, id)
            const isEmailOk = emailValidation(email)
            const isFilled = checkFormFields(name, email, inputValues.id, street, username, phone, web, company)
            const url = validURL(web)
            const formatOfValues = checkFormat(name, street, username, company)
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
                toast(editedUser)
                history.push('/users')
            }
            
        }
        
        return (
           <UserForm 
                title={name}
                getValues={getInputValues}
                submit={handleEditBtn}
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
export default EditUser

