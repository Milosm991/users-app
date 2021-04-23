import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

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
        <div>
            <Center mt={25}>Create new user</Center>
        <Container 
        maxW='md' 
        centerContent
        borderWidth="1px" 
        borderRadius="lg"
        borderColor='black'
        p={10}
        marginTop={50}>
            <Box>
                <Input placeholder="Enter name" marginBottom={6} type='text' name='name' value={inputValues.name} onChange={newUser}/>
                <Input placeholder="Enter email" marginBottom={6} type='text' name='email' value={inputValues.email} onChange={newUser}/>
                <Button colorScheme="blue" onClick={handleCreateBtn}>Save</Button>
            </Box>
        </Container>
        </div>
    )
}
export default CreateUser