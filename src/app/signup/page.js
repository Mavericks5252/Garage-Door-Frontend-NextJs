'use client'
// import Image from "next/image";
import { Button, ButtonGroup, IconButton, VStack, background, Image, Box, Center, Container, FormControl, FormLabel, Input, FormHelperText, Switch, FormErrorMessage  } from '@chakra-ui/react'
import { HStack, } from '@chakra-ui/react'
import { Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,} from '@chakra-ui/react'
import { setRequestMeta } from 'next/dist/server/request-meta'
import React, { useState, } from 'react'
import { FaLightbulb } from 'react-icons/fa'
import { GiHomeGarage } from 'react-icons/gi'

const steps = [
    { title: 'Account Login' },
    { title: 'User Data'},
    { title: 'Alerts and Logs'},
]

export default function Signup () {
    const [step, setStep] = useState(1)
    const { activeStep } = useSteps({ initialStep: 0})
    function handleClick () {
        setStep(step + 1)
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [plate, setPlate] = useState('')
    const [alerts, setAlerts] = useState(false)
    const [logs, setLogs] = React.useState(false)

    const handleUsernameChange = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const handlePhoneNumberChange = (e) => {
        e.preventDefault()
        setPhoneNumber(e.target.value)
    }
    const handlePlateChange = (e) => {
        e.preventDefault()
        setPlate(e.target.value)
    }

    function SubmitData () {
        console.log(username)
        console.log(password)
        console.log(plate)
        console.log(phoneNumber)
        console.log(alerts)
        console.log(logs)
    }
    const usernameError = username.length < 5
    const passwordError = password.length < 5

    const telephoneError = phoneNumber.length < 10
    const plateError = plate.length < 3
    // Setup conditional render
    return (
        <Box h='calc(100vh)' bgGradient='/5570834.jpg' color ='white'>
            <Container>
                <Center bg = 'RGBA(255, 255, 255, 0.24)' borderWidth='1px' borderRadius='lg' >
                    <HStack>
                        <Stepper index={step} orientation='vertical' height='400px' gap='0' colorScheme={'blue'}>
                            {steps.map((step, index) => (
                                <Step key={index}>
                                    <StepIndicator>
                                        <StepStatus
                                            complete={<StepIcon />}
                                            incomplete={<StepNumber />}
                                            active={<StepNumber />}
                                        />
                                    </StepIndicator>

                                    <Box flexShrink='0'>
                                        <StepTitle>{step.title}</StepTitle>
                                    </Box>
                                    <StepSeparator />
                                </Step>
                            ))}
                        </Stepper>
                        {(() => {
                            switch (step) {
                            case 1 :
                                return <Box>
                                    <VStack>
                                        <FormControl>
                                            <FormLabel>Username</FormLabel>
                                            <Input
                                                variant='flushed'
                                                placeholder='username'
                                                onChange={handleUsernameChange}
                                                value ={username}
                                                isInvalid = {usernameError}
                                                errorBorderColor='crimson'
                                            /> {usernameError
                                                ? (
                                                    <FormHelperText>Username is less then 5 characters
                                                    </FormHelperText>)
                                                : (
                                                    <FormHelperText>
                                                    </FormHelperText>)}
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Password</FormLabel>
                                            <Input
                                                variant='flushed'
                                                placeholder='password'
                                                onChange={handlePasswordChange}
                                                value ={password}
                                                isInvalid = {passwordError}
                                                errorBorderColor='crimson'
                                            /> {passwordError
                                                ? (
                                                    <FormHelperText>Password is less then 5 characters
                                                    </FormHelperText>)
                                                : (
                                                    <FormHelperText>
                                                    </FormHelperText>)}
                                        </FormControl>
                                        <Button
                                            isDisabled={passwordError | usernameError}
                                            onClick={handleClick}
                                            colorScheme={'green'}>
                                            Submit
                                        </Button>
                                    </VStack>
                                </Box>
                            case 2:
                                return <Box>
                                    <VStack>
                                        <FormControl>
                                            <FormLabel>Plate Number</FormLabel>
                                            <Input variant='flushed' value={plate} onChange={handlePlateChange} />
                                            <FormHelperText>Enter a licence plate number</FormHelperText>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Phone Number</FormLabel>
                                            <Input type='tel' variant='flushed' value ={phoneNumber} onChange={handlePhoneNumberChange}/>
                                            <FormHelperText>Enter a phone number</FormHelperText>
                                        </FormControl>
                                        <Button
                                            isDisabled={telephoneError | plateError}
                                            onClick={handleClick}
                                            colorScheme={'green'}>
                                            Submit</Button>
                                    </VStack>
                                </Box>
                            case 3:
                                return <Box>
                                    <VStack>
                                        <FormControl display='flex' alignItems='center'>
                                            <VStack>
                                                <FormLabel htmlFor='phone-alerts' mb='0'>
                                    Enable text alerts?
                                                    <Switch id='phone-alerts' onChange={() => setAlerts(!alerts)}/>
                                                </FormLabel>
                                                <FormLabel htmlFor='logs' mb='0'>
                                    Enable Logs
                                                    <Switch id='logs' onChange={() => setLogs(!logs)} />
                                                </FormLabel>
                                            </VStack>
                                        </FormControl>
                                        <Button onClick={SubmitData}>Finish</Button>
                                    </VStack>

                                </Box>
                            default:
                                return null
                            }
                        })()}
                    </HStack>
                </Center>
            </Container>
        </Box>
    )
}
