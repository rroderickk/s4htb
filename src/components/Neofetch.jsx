import * as React from 'react';
import neo from '@imgs/neo.png';
import s4 from '@logos/s4vitar.svg';
import { Box, Container, 
  Button, Img, useColorModeValue,
} from '@chakra-ui/react';
import {  ViewIcon } from '@chakra-ui/icons';
import { Footer } from './Footer';

const Neofetch =()=> { 
	const b = useColorModeValue('rgb(236, 242, 254)', '#111111');

return (<>
<Container py={4} as='section'  centerContent
  css={{borderRadius: '8px'}}  overflow='hidden'
  boxShadow='0px 0px 40px rgba(0, 0, 0, 0.13)'
  bg={b}
>
  <Container alignContent={'center'} centerContent
    p={8} mb={28} textAlign={'center'}  overflow='hidden'
      css={{borderRadius: '8px'}}
    boxShadow={'0px 0px 40px rgba(0, 0, 0, 0.13)'}
  > <Box mb={4} justifyContent='center' 
      display='flex' alignItems={'center'} 
      flexDir='column'
    > <Box borderWidth='1px' p='8' maxW='820px' overflow='hidden' center='true'>
        <Img src={neo} alt='neofetch' w={{base: '500px', sm: '350px', md: '910px'}} h='100%' margin='auto'
          style={{ borderRadius: '8px'}}
        /><br/>
      </Box>

        <Button m={10} px={48}
          leftIcon={<ViewIcon/>}
          as='a' target='_blank' 
          href='https://www.youtube.com/watch?v=fshLf6u8B-w'
          css={{ color: 'crimson' }}
          _hover={{ color: '#48BB78' }} >
          ASÍ es el ENTORNO de un HACKER
        </Button><br/>
            
      <a href='https://discord.com/invite/u3dsh9M'
        target='_blank' rel='noopener noreferrer'>

        <img width='100%' src={s4} alt='neofetch'
          style={{ borderRadius: '8px', marginTop: '-80px'}}
        />
      </a>
    </Box>
  </Container>
  <Footer/>
</Container>
</> ) }; export {Neofetch};