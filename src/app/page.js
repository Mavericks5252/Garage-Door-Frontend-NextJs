'use client'
// import Image from "next/image";
import { Button, ButtonGroup, IconButton, VStack, background, Image, Box, Center, Container, Icon, Text, AspectRatio, Flex, } from '@chakra-ui/react'
import { HStack, useDimensions, } from '@chakra-ui/react'
import React, { useEffect, useState, useRef, Children} from 'react'
import { FaLightbulb, } from 'react-icons/fa'
import { GiHomeGarage, } from 'react-icons/gi'
import { HiMiniArrowsUpDown } from 'react-icons/hi2'
import Header from './components/Header'
import styles from './page.module.css'
// import { CircleIcon } from "../theme/circleIcon";

export default function Home () {
    const elementRef = useRef()
    const dimensions = useDimensions(elementRef, true)
    const [doorStatus, setdoorStatus] = React.useState(false)

    function sendData (relay, value) {
        fetch('http://localhost:8000', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
			},
            body: JSON.stringify({
                relay,
                value
            })
        }).then((response) => {
            if (!response.ok) {
                console.error('Error sending data:', response, statusText)
            }
        })
    }
    useEffect(() => {
        setInterval(() => {
            const res = fetch('http://localhost:8000', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json',
				}
            }, { next: { revalidate: 5 }})
                .then(async res => await res.json(), res => { console.log(res) })
                .then(data => { setdoorStatus(data.DoorStatus) })
        }, 2000)
        // map((response) => response.json())
        // .do(value => console.log(value))
        // let response1 = response.json()
        // console.log(Object.getOwnPropertyNames(response1))
    })

    const CircleIcon = (props) => (
        <Icon viewBox='0 0 200 200' {...props}>
		  <path
                fill='currentColor'
                d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
		  />
        </Icon>
	  )

    function testDoorHandler () {
        console.log(doorStatus)
    }
    return (
    	<Box h='80%' ref ={elementRef}>
            <VStack>
                <HStack
                    spacing={2}
                    allign='stretch'
                >
                    <IconButton
                        // fontSize='20px'
                        fontSize={dimensions && dimensions.borderBox.width * 0.075}
                        w={dimensions && dimensions.borderBox.width * 0.1}
                        h={dimensions && dimensions.borderBox.width * 0.1}
                        colorScheme='blue'
                        icon={<HiMiniArrowsUpDown />}
                        onClick={() => {
                            sendData('door', 1.0)
                        }}
                    />
                    <IconButton
                        fontSize={dimensions && dimensions.borderBox.width * 0.075}
                        w={dimensions && dimensions.borderBox.width * 0.1}
                        h={dimensions && dimensions.borderBox.width * 0.1}
                        colorScheme='blue'
                        icon={<FaLightbulb />}
                        onClick={() => {
                            sendData('light', 1.0)
                        }}

                    />
                </HStack>
                <HStack>
                    <CircleIcon boxSize={8} color={doorStatus ? ('green') : ('red.500')} />
                    <Text color ='white'>The Door is {doorStatus ? ('closed') : ('open')}</Text>
                </HStack>
                <AspectRatio ratio={16 / 9} width='80%'>
                    <Image src={'http://localhost:8000/stream'} className="App-logo" />
                </AspectRatio>
                <Button onClick={testDoorHandler}>test</Button>
            </VStack>
        </Box>
    )
}
