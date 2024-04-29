'use client'
import { ChakraProvider, Container, Box } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import Header from '../app/components/Header'
import theme from '../theme'
const inter = Inter({ subsets: ['latin',] })

export default function RootLayout ({ children }) {
    return (
        <html lang="en">
            <body>
                <ChakraProvider theme={theme}>
                    <Box bg = 'rgb(2,0,36)' bgGradient='linear-gradient(176deg, rgba(2,0,36,1) 0%, rgba(9,36,121,1) 73%, rgba(0,212,255,1) 100%)' overflow={'show'} minHeight="100vh" w={'full'}>

                        <Box bg ='RGBA(0, 0, 0, 0.64)'>
                            <Header/>
                        </Box>
                        <Container maxW='100%' minHeight="100vh">
                            {children}
                        </Container>
                    </Box>
                </ChakraProvider>
            </body>
        </html>
    )
}
