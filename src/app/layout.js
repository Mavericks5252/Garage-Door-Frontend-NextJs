'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import theme from '../theme'

const inter = Inter({ subsets: ['latin',] })

export default function RootLayout ({ children }) {
    return (
        <html lang="en">
            <body>
                <ChakraProvider theme={theme}>
                    {children}
                </ChakraProvider>
            </body>
        </html>
    )
}
