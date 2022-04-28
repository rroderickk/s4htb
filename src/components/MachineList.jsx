import React from "react";
import { Container, Box , Button, useColorModeValue
} from '@chakra-ui/react'
import { ViewIcon, TriangleUpIcon,
  SettingsIcon, DragHandleIcon, HamburgerIcon,
  LinkIcon, CheckIcon, TriangleDownIcon,
  WarningTwoIcon, SmallCloseIcon,
} from '@chakra-ui/icons'
import { Footer } from "../components/Footer";

const MachineList =(props)=> { 
	const b = useColorModeValue("rgb(236, 242, 254)", "#111111");
	const c = useColorModeValue("rgb(236, 242, 254)", "#121212");
	const t = useColorModeValue("#121212", "rgb(236, 242, 254)");
return ( <>

<Container as="section" bg={b} py={2} px={2}
  css={{borderRadius: "8px", paddingBottom: "80px"}} pb={'40px'} mb={-4}
  boxShadow="0px 0px 40px rgba(0, 0, 0, 0.13)" 
> <TriangleDownIcon css={{display: "flex", flexDirection: "row-reverse", marginLeft: "auto", marginRight: "20px"}}
    _hover={{cursor: 'pointer', color: "brand.s4vitarGreenTeam"}} color="#e06c" 
    onClick={()=>window.scroll({top: 0,top: 99999999999, behavior: 'smooth'})}
  />

  { props.objetosFiltrados.length!==0? 

    props.objetosFiltrados.map( 
      obj=> { return ( <React.Fragment key={obj.sku} >
        <Container as="article" 
          bg={c} p={8} mb={3} my={6} mt={1}
            textAlign={'left'}
            css={{borderRadius: "8px"}}
          boxShadow={"0px 0px 40px rgba(0, 0, 0, 0.13)"}
        >
          <Box p={13} flex='true' color={t}
            __css={{ lineHeight: '1.5', }} direction="column"
          >
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
                ml={2} mr={4} mt={-1}
              /> Ip {obj.ip}

                &nbsp;
              Resolved? {obj.resuelta===true ? 
                <CheckIcon mt={-1} color="green"/> 
                                :
                <SmallCloseIcon mt={-1} color="red"/>}

                &nbsp;&nbsp;&nbsp;
              <SettingsIcon 
                ml={4} mt={-2}
              /> {obj.so}

                &nbsp;&nbsp;
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
              />{obj.dificultad}&nbsp;

              { obj.activeDirectory && <TriangleUpIcon color="blue" ml={4} mr={4} mt={-4}/> }

              <span style={{
                color: "blue",
              }}>{ obj.activeDirectory && obj.activeDirectory+' '}</span>&nbsp;

              {obj.bufferOverFlow && <HamburgerIcon color="orange" mr={4} mt={-4}/> }

              <span style={{ color: "orange", }}>
                { obj.bufferOverFlow && obj.bufferOverFlow+' '}
              </span><br/><br/>
            </Box>

              <span style={{
                filter: "contrast(0.3)"
              }}>Skills:</span> {obj.skills}<br/><br/>

              <span style={{
                filter: "contrast(0.1)"
              }}>{obj.comment}</span>

              <Box __css={{
                backdropFilter: "blur(40px)",
                filter: 'contrast(0.9)',
                background: "transparent",
                borderRadius: "4px",
                padding: "8px",
                position: "relative",
                borderLeft: "8px solid crimson",
              }}>
                {obj.activeDirectory}<LinkIcon ml={4} mr={4}/>{obj.like}
              </Box>

            </Box>
          </Container>

        </React.Fragment>
      )}) 
      : 
      ( props.NotFound() ) 
  }
  <TriangleUpIcon css={{display: "flex", flexDirection: "row-reverse", marginLeft: "auto", marginRight: "20px"}}
    _hover={{cursor: 'pointer', color: 'brand.800'}} color="#61afef"
    onClick={()=>window.scroll({top: 0,top: 0, behavior: 'smooth'})}
  />

</Container>
<Footer/>

</> ) }; export {MachineList};