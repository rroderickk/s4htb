import React from "react";
import { Text, Button } from '@chakra-ui/react'
import { AtSignIcon } from '@chakra-ui/icons'
import cheat from "@logos/cheat.jpg"

const Footer =()=> { return (<>

<Text fontSize={['0.8em','0.8em','1.1em']} mx="auto"
  css={{
  textAlign: 'center',
  marginTop: "-100px",
  fontWeight: "bold",
  fontFamily: "Hack",
  width: "80%",
  paddingBottom: "90px",
}}>Made by &nbsp;
  <Button as='a' target='_blank' 
    variant='outline' 
    href="https://twitter.com/cheatmodes4/"
    css={{ color: "crimson", border: "none" }}
    _hover={{ color: "#48BB78" }}
  >
    <AtSignIcon/> <Text fontSize={['0.8em','1em','1.1em']}>CheatModes4</Text>
      <img src={cheat} width="20px" height="20px"
        style={{ borderRadius: "100%", margin: "0 4px"}}
      />
    </Button>
    using React/ChakraUi, with affection to the Hack4u community.
</Text>

</> ) }; export {Footer};