import React from 'react'

import {
    Container,
    Box,
    Input,
    Button,
    Center
  } from "@chakra-ui/react"

const UserForm = ({title, submit, getValues, name, email, id, street, username, phone, web, company}) => {
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
                    <Center fontWeight="bold" fontSize="lg" color='darkslategray' mb={6}>{title}</Center>
                    <Input 
                        placeholder='Enter new ID'
                        name='id'
                        type='number'
                        value={id || ''}
                        marginBottom={6}
                        onChange={getValues}
                    />
                    <Input 
                        placeholder='Enter new name...' 
                        name='name' 
                        type='text'
                        value={name || ''} 
                        marginBottom={6}
                        onChange={getValues} 
                        />
                    <Input 
                        placeholder='Enter new email...' 
                        name='email' 
                        type='text'
                        value={email || ''}
                        marginBottom={6}
                        onChange={getValues} 
                        />
                    <Input 
                        placeholder='Enter street...' 
                        name='street' 
                        type='text'
                        value={street || ''}
                        marginBottom={6}
                        onChange={getValues} 
                        />
                    <Input 
                        placeholder='Enter new username...' 
                        name='username' 
                        type='text'
                        value={username || ''}
                        marginBottom={6}
                        onChange={getValues} 
                        />
                    <Input 
                        placeholder='Enter new phone number...' 
                        name='phone' 
                        type='text'
                        value={phone || ''}
                        marginBottom={6}
                        onChange={getValues} 
                        />
                    <Input 
                        placeholder='Enter new web mail...' 
                        name='web' 
                        type='text'
                        value={web || ''}
                        marginBottom={6}
                        onChange={getValues} 
                        />
                    <Input 
                        placeholder='Enter new company name...' 
                        name='company' 
                        type='text'
                        value={company || ''}
                        marginBottom={6}
                        onChange={getValues} 
                        />
                    <Button colorScheme="blue" onClick={submit}>Save</Button>
                </Box>
            </Container>
    )
}
export default UserForm
