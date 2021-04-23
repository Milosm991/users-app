import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import { 
    Container, 
    Center,
    Box,
    Input,
    Button,
    Heading,
    useToast } from "@chakra-ui/react"

import { validation } from '../../services/emailValidation'

const Login = () => {
    const history = useHistory();
    const toast = useToast()
    const [email, setEmail ] = useState('');

    const log = () => {
        if(email){
            history.push('/users')
        }else{
            toast({
                title: "ERROR!",
                description: "Enter correct email!",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }    
        
    }

    const inputValue = ( value ) => {
        const isEmailOk = validation(value);
            if(isEmailOk){
                setEmail(value);
            }
    }

    return (
        <div>
        <Container 
            maxW='md' 
            centerContent
            borderWidth="2px" 
            borderRadius="lg"
            borderColor='darkslategray'
            p={10}
            marginTop={25}>
        <Heading mb={10} color='darkslategray'>LOG IN</Heading>
                <Box>
                    <Input placeholder="Enter email" marginBottom={6} onChange={(e) => inputValue(e.target.value)} />
                    <Button colorScheme="blue" onClick={log}>Log In</Button>
                </Box>
        </Container>
        </div>
    )
}

export default Login