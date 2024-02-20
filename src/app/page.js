'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { GiHomeGarage } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { VStack } from '@chakra-ui/react';



export default function Home() {
	function sendData(relay, value) {
		fetch('http://raspberrypi.local:8000', {
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
	return (
		<main className={styles.main}>
			<div>
				<VStack
					spacing={2}
					allign='stretch'
				>
					<IconButton
						fontSize='150px'
						w='150px'
						h='150px'
						colorScheme='blue'
						icon={<GiHomeGarage />}
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
				</VStack>
			</div>
		</main>
	);
}
