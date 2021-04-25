import React from 'react'

import {
    Container,
    Box,
    Input,
    Button,
    Center
  } from "@chakra-ui/react"

const UserForm = ({title, submit, getValues, name, email}) => {
    return (
        <Container 
            maxW='md' 
            centerContent
            borderWidth="2px" 
            borderRadius="lg"
            borderColor='darkslategray'
            p={10}
            marginTop={50}>
                <Box>
                    <Center fontWeight="bold" fontSize="lg" color='darkslategray' mb={6}>{title}</Center>
                    <Input 
                        placeholder='Enter new name...' 
                        name='name' 
                        type='text'
                        value={name} 
                        marginBottom={6}
                        onChange={getValues} 
                        />
                    <Input 
                        placeholder='Enter new email...' 
                        name='email' 
                        type='text'
                        value={email}
                        marginBottom={6}
                        onChange={getValues} 
                        />
                    <Button colorScheme="blue" onClick={submit}>Save</Button>
                </Box>
            </Container>
    )
}
export default UserForm
