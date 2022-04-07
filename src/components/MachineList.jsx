import React from "react";
import { Container, Box , Button
} from '@chakra-ui/react'
import { ViewIcon, 
SettingsIcon, DragHandleIcon,
LinkIcon, CheckIcon,
WarningTwoIcon, SmallCloseIcon,
} from '@chakra-ui/icons'

const MachineList =(props)=> { return ( <>

<Container
  bg="white" 
  p={8} 
  css={{borderRadius: "8px"}}
  boxShadow="0px 0px 40px rgba(0, 0, 0, 0.13)"
>

{ props.objetosFiltrados.length!==0? 

  props.objetosFiltrados.map( 
    obj=> { return ( <React.Fragment key={obj.sku} >
      <Container 
        bg="white" p={8} mb={8} mt={8}
          textAlign={'left'}
          css={{borderRadius: "8px"}}
        boxShadow={"0px 0px 40px rgba(0, 0, 0, 0.13)"}
      >
        <Box p={13} flex='true'
          __css={{ lineHeight: '1.5',
        }}>
          <Box __css={{
            verticalAlign: 'center',
            lineHeight: '1.5',
          }}>
            <Button 
              leftIcon={<ViewIcon/>}
                as='a' target='_blank' 
                  variant='outline' 
                href={obj.youtube}
              css={{ color: "crimson" }}
              _hover={{ color: "#48BB78" }}
            >
              {obj.id}. {obj.name} 
            </Button>
            
            <DragHandleIcon 
              ml={40} mr={4} mt={-2}
            /> Ip {obj.ip}

              &nbsp;&nbsp;&nbsp;&nbsp;
            Resolved? {obj.resuelta===true ? 
              <CheckIcon mt={-2} color="green"/> 
                              :
              <SmallCloseIcon mt={-2} color="red"/>}

              &nbsp;&nbsp;&nbsp;&nbsp;
            <SettingsIcon 
              ml={4} mt={-2}
            /> {obj.so}

              &nbsp;&nbsp;&nbsp;&nbsp;
            <WarningTwoIcon 
              ml={4} mr={8} mt={-2}
              css={{ color:

                (()=> { switch (obj.dificultad) {
                  case 'Difícil': return "#C53030"; break;
                    case 'Fácil': return "#48BB78"; break;
                    case 'Insane': return "red"; break;
                  default: return "#61afef"; break;
                }})()

              }}
            />{obj.dificultad}<br/><br/>
          </Box>

          Skills: {obj.skills}<br/><br/>

          <Box __css={{
            backdropFilter: "blur(40px)",
            filter: 'contrast(0.9)',
            background: "transparent",
            borderRadius: "4px",
            padding: "8px",
          }}>
            <LinkIcon ml={4} mr={4}/>{obj.like}
          </Box>

        </Box>
      </Container>

    </React.Fragment>
  )}) 
  : 
  ( props.NotFound() ) 

}
</Container>

</> ) }; export {MachineList};