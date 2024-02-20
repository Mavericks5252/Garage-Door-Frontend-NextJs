'use client'
import { Inter } from "next/font/google";
import { ChakraProvider } from '@chakra-ui/react'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
