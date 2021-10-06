import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'


import {
    Container,
    Box,
    Input,
    Button,
    Center,
    useToast
  } from "@chakra-ui/react"

  import { emailValidation, checkFormFields, validURL, checkFormat, phoneValidaton, nameValidation } from '../../services/emailValidation'
  import { error_empty, error_email, error_url } from '../../services/notifications.js'
  import UserServices from '../../services/UserServices'

const UserForm = ({title, edit}) => {
    const [ inputValues, setInputValues ] = useState({})
    const history = useHistory()
    const toast = useToast()
    const { id, name } = useParams()

    const newUser = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    }

    const handleSubmitBtn = async () => {
        const { name, email, street, username, phone, web, company } = inputValues

        const isEmailOk = emailValidation(email)
        const isFilled = checkFormFields(name, email, inputValues.id, street, username, phone, web, company)
        const formatOfValues = checkFormat(name, street, username, company)
        const url = validURL(web)
        const isPhoneOk = phoneValidaton(phone)
        const isNameOk = nameValidation(name) 
        const newUser = edit ? await UserServices.editUser(inputValues, id) : await UserServices.createUser(inputValues)
        
        if(!isFilled){
            toast(error_empty)
        } else if(isNameOk.status === 'error'){
            toast(isNameOk)
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
        <Container 
            maxW='md' 
            centerContent
            borderWidth="2px" 
            borderRadius="lg"
            borderColor='darkslategray'
            p={10}
            marginTop={50}
            marginBottom={10}>
                <Box>
                    <Center fontWeight="bold" fontSize="lg" color='darkslategray' mb={6}>{edit ? name : title}</Center>
                    <Input 
                        placeholder='Enter new ID'
                        name='id'
                        type='number'
                        value={inputValues.id || ''}
                        marginBottom={6}
                        onChange={newUser}
                    />
                    <Input 
                        placeholder='Enter new name...' 
                        name='name' 
                        type='text'
                        value={inputValues.name || ''} 
                        marginBottom={6}
                        onChange={newUser} 
                        />
                    <Input 
                        placeholder='Enter new email...' 
                        name='email' 
                        type='text'
                        value={inputValues.email || ''}
                        marginBottom={6}
                        onChange={newUser} 
                        />
                    <Input 
                        placeholder='Enter street...' 
                        name='street' 
                        type='text'
                        value={inputValues.street || ''}
                        marginBottom={6}
                        onChange={newUser} 
                        />
                    <Input 
                        placeholder='Enter new username...' 
                        name='username' 
                        type='text'
                        value={inputValues.username || ''}
                        marginBottom={6}
                        onChange={newUser} 
                        />
                    <Input 
                        placeholder='Enter new phone number...' 
                        name='phone' 
                        type='text'
                        value={inputValues.phone || ''}
                        marginBottom={6}
                        onChange={newUser} 
                        />
                    <Input 
                        placeholder='Enter new web mail...' 
                        name='web' 
                        type='text'
                        value={inputValues.web || ''}
                        marginBottom={6}
                        onChange={newUser} 
                        />
                    <Input 
                        placeholder='Enter new company name...' 
                        name='company' 
                        type='text'
                        value={inputValues.company || ''}
                        marginBottom={6}
                        onChange={newUser} 
                        />
                    <Button colorScheme="blue" onClick={handleSubmitBtn}>Save</Button>
                </Box>
            </Container>
    )
}
export default UserForm
