import React from 'react'

import { Box, Flex, Spacer, Heading } from "@chakra-ui/react"
import { Button } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"

const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex w="100%" p={6} bg="darkslategray">
        <Box>
            <Button onClick={toggleColorMode}>
                 Switch to {colorMode === "light" ? "Dark" : "Light"}
            </Button>
        </Box>
        <Spacer />
        <Box p="2">
            <Heading size="lg" color='white'>User App</Heading>
        </Box>
        </Flex>
    )
}

export default Header