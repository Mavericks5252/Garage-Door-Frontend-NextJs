import React from "react"
import { Box, Text, Icon } from "@chakra-ui/react"
import { GiHomeGarage } from "react-icons/gi";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Icon as={GiHomeGarage} boxSize={12}/>
    </Box>
  )
}