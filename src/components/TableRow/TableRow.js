import React from 'react';
import { useHistory } from "react-router";

import { Tr, Td, } from '@chakra-ui/react'

const TableRow = ({ id, name, email, city }) => {
    const history = useHistory()

    return (
        <Tr
        onClick={() => history.push(`/users/${id}`)} 
        _hover={{
        background: "lightslategray",
        color: "white",
        cursor: "pointer"
        }}>
            <Td>{id}</Td>
            <Td>{name}</Td>
            <Td>{email}</Td>
            <Td>{city}</Td>
        </Tr>
    )
}
export default TableRow