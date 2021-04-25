import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router'; 
import { Link } from "react-router-dom";

import {
    Table,
    Thead,
    Tbody,
    Td,
    Tr,
    Th,
    Container,
    Button,
    useToast
  } from "@chakra-ui/react"

import UserServices from '../../services/UserServices.js'
import Loader from '../Loader/Loader.js'
import AlertModal from '../AlertModal/AlertModal.js'

const User = () => {
    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true)
    const { id } = useParams()
    const toast = useToast()
    const history = useHistory()


    const  fetchSingleUser = (id) => {
        UserServices.getSingleUser(id)
        .then(data => setUser(data))
        
        if(user.length !== 0){
            setLoader(false)
        }else{
            setLoader(true)
        }
    }

    const deleteBtn = () => {
        const deletedUser = UserServices.deleteUser(id);
        
        if(deletedUser){
            toast({
                title: "Success!",
                description: `You deleted ${user.name} account!`,
                status: "success",
                duration: 3000,
                isClosable: true,
            })
            history.push('/users') 
        }else {
            toast({
                title: "ERROR!",
                description: `Ooops, Something went wrong!`,
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
    }

    useEffect(() => {
        fetchSingleUser(id)
    })

    return loader ? <Loader /> : (
        <Container maxW="container.xl" mt={10}>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>City</Th>
                        <Th>Street</Th>
                        <Th>Username</Th>
                        <Th>Phone</Th>
                        <Th>Web</Th>
                        <Th>Company</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{user.id}</Td>
                        <Td>{user.name}</Td>
                        <Td>{user.email}</Td>
                        <Td>{user.city}</Td>
                        <Td>{user.street}</Td>
                        <Td>{user.username}</Td>
                        <Td>{user.phone}</Td>
                        <Td>{user.website}</Td>
                        <Td>{user.company}</Td>
                    </Tr>
                </Tbody>
            </Table>
            <Link to={`/users/${id}/edit/${user.name}`}><Button mt={10} mr={5} >Edit</Button></Link>
            <AlertModal deleteFunction={deleteBtn}/>
        </Container>
    )
}

export default User