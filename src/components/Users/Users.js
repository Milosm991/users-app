import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router'


import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Container,
    Button
  } from "@chakra-ui/react"

import UserServices from '../../services/UserServices.js';
import TableRow from '../TableRow/TableRow.js'
import Loader from '../Loader/Loader.js'


const Users = () => {
    const [users, setUsers] = useState([])
    const [loader, setLoader ] = useState(true)
    const history = useHistory()
    

    const fetchAllUsers = () => {
        const users = UserServices.getAllUsers()
        .then(data => setUsers(data))
        
        if(users.length !== 0){
            setLoader(false)
        }else{
            setLoader(true)
        }
    }

    useEffect(() => {
        let email = localStorage.getItem('email')
        
        if(email !== null) {
            fetchAllUsers()
        }else {
            history.push('/')
        }
    }, [])
    
    return loader ? <Loader /> : (
        <Container maxW="container.xl" mt={10} >
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>City</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {users.map((user) => (<TableRow key={user.id} 
                                                id={user.id} 
                                                name={user.name} 
                                                email={user.email} 
                                                city={user.city} 
                                                />
                    ))}
                </Tbody>
            </Table>
            <Button mt={4} mb={6} onClick={() => history.push('/createUser')}>Create New User</Button>        
        </Container>
    ) 
}


export default Users