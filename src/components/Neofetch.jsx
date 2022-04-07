import React from "react";
import neo from "@imgs/neo.png";
import s4 from "@logos/s4vitar.svg";
import { 
  Box, Container, Button, 
} from "@chakra-ui/react";
import {  ViewIcon } from "@chakra-ui/icons";

const Neofetch =()=> { return (<>
<Container
  bg="white" 
  p={8} 
  css={{borderRadius: "8px"}}
  boxShadow="0px 0px 40px rgba(0, 0, 0, 0.13)"
>
  <Container 
    bg="white" p={8} mb={8} mt={8}
      textAlign={'center'} w={'900px'}
      css={{borderRadius: "8px"}}
    boxShadow={"0px 0px 40px rgba(0, 0, 0, 0.13)"}
  >
    <Box alignContent={'center'} mt={8}>
      <img width="600px" src={neo} alt="neofetch"
        style={{ borderRadius: "8px", }}
      />

        <Button m={10}
          leftIcon={<ViewIcon/>}
          as='a' target='_blank' 
          variant='outline' 
          href="https://www.youtube.com/watch?v=fshLf6u8B-w"
          css={{ color: "crimson" }}
          _hover={{ color: "#48BB78" }}
        >
          ASÍ es el ENTORNO de un HACKER
        </Button>
            
      <a href="https://discord.com/invite/u3dsh9M"
        target="_blank" rel="noopener noreferrer"
      >
        <img width="600px" src={s4} alt="neofetch"
          style={{ borderRadius: "8px", marginTop: "-80px"}}
        />
      </a>
    </Box>
  </Container>
</Container>
</> ) }; export {Neofetch};