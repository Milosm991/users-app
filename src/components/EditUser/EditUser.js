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

import { emailValidation } from '../../services/emailValidation'
import UserServices from '../../services/UserServices'

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
            <Container 
            maxW='md' 
            centerContent
            borderWidth="2px" 
            borderRadius="lg"
            borderColor='darkslategray'
            p={10}
            marginTop={50}>
                <Box centerContent>
                    <Center fontWeight="bold" fontSize="lg" color='darkslategray' mb={6}>{name}</Center>
                    <Input 
                        placeholder='Enter new name...' 
                        marginBottom={6} type='text' 
                        name='name' 
                        value={inputValues.name} 
                        onChange={editedUser}/>
                    <Input 
                        placeholder='Enter new email...' 
                        marginBottom={6} type='text' 
                        name='email' 
                        value={inputValues.email} 
                        onChange={editedUser}/>
                    <Button colorScheme="blue" onClick={handleEditBtn}>Edit</Button>
                </Box>
            </Container>
        )
}
export default EditUser