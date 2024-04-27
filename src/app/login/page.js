'use client'
import { Button, ButtonGroup, IconButton, VStack, background, Image, Box, Center, Container, FormControl, FormLabel, Input, FormHelperText, Switch, FormErrorMessage  } from '@chakra-ui/react'
import { redirect } from 'next/dist/server/api-utils'
import React, { useState, } from 'react'

export default function Login () {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleUsernameChange = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }
    function SubmitData () {
        console.log(username)
        console.log(password)

        redirect(`/dashboard/${user?.uuid}`)
    }
    return (
        <Box h='calc(100vh)' bgGradient='/5570834.jpg' color ='white'>
            <Container>
                <Center bg = 'RGBA(255, 255, 255, 0.24)' borderWidth='1px' borderRadius='lg' >
                    <VStack>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input
                                variant='flushed'
                                placeholder='username'
                                onChange={handleUsernameChange}
                                value ={username}></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input
                                variant='flushed'
                                placeholder='password'
                                onChange={handlePasswordChange}
                                value ={password}></Input>
                        </FormControl>
                        <Button onClick={SubmitData}>Finish</Button>
                    </VStack>
                </Center>
            </Container>
        </Box>
    )


}