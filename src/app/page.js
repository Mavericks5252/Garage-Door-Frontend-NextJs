'use client'
//import Image from "next/image";
import styles from "./page.module.css";
import { Button, ButtonGroup, IconButton, VStack, background, Image, Box, Center, Container } from '@chakra-ui/react'
import React, {useEffect, useState} from "react";
import { GiHomeGarage } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { HStack } from '@chakra-ui/react';
import Header from './components/Header';
import { HiMiniArrowsUpDown } from "react-icons/hi2";

export default function Home() {

	const [doorStatus, setdoorStatus] = React.useState(false)

	function sendData(relay, value) {
		fetch('http://localhost:8000', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				relay: relay,
				value: value,
			}),
		}).then((response) => {
			if (!response.ok) {
				console.error('Error sending data:', response, statusText);
			}
		});
	}
	useEffect(() => {
		setInterval(() => {
			const res = fetch('http://localhost:8000', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				}
			},{ next: { revalidate: 5 }})
			.then(res => res.json(),  res=> console.log(res))
			.then(data=>{setdoorStatus(data.DoorStatus)});
		}, 2000)
		//map((response) => response.json())
		//.do(value => console.log(value))
			//let response1 = response.json()
			//console.log(Object.getOwnPropertyNames(response1))
	})

	function testDoorHandler(){
		console.log(doorStatus)
	}
	return (
		<Box h='calc(100vh)' bgGradient='/5570834.jpg'>
			<Box bg ='RGBA(0, 0, 0, 0.64)'>
				<Header/>
			</Box>
				<Box h='calc(100vh)'>
				<VStack>
					<HStack
					spacing={2}
					allign='stretch'
				>
					<IconButton
						fontSize='150px'
						w='150px'
						h='150px'
						colorScheme='blue'
						icon={<HiMiniArrowsUpDown />}
						onClick={() => {
							sendData('door', 1.0);
						}}
					/>
					<IconButton
						fontSize='150px'
						w='150px'
						h='150px'
						colorScheme='blue'
						icon={<FaLightbulb />}
						onClick={() => {
							sendData('light', 1.0);
						}}

					/>
				</HStack>
				<Image src={'http://localhost:8000/stream'} className="App-logo" />
				<Button onClick={testDoorHandler}>test</Button>
				</VStack>
			</Box>
		</Box>
	);
}
