import React, { useState, useRef } from 'react'

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    Container
  } from "@chakra-ui/react"

const AlertModal = ({ deleteFunction }) => {
        const [isOpen, setIsOpen] = useState(false)
        const onClose = () => setIsOpen(false)
        const cancelRef = useRef()

        return (
            <Container ml={55} mt={-10}>
            <Button colorScheme="red" onClick={() => setIsOpen(true)}>
                Delete User
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Delete User
                    </AlertDialogHeader>

                    <AlertDialogBody>
                    Are you sure? You can't undo this action.
                    </AlertDialogBody>

                    <AlertDialogFooter> <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="red" onClick={deleteFunction} ml={3}>
                        Delete
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
            </Container>
        )
}
export default AlertModal