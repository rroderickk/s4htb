import React from "react";
import { Container, Box , Button, useColorModeValue
} from '@chakra-ui/react'
import { ViewIcon, TriangleUpIcon,
  SettingsIcon, DragHandleIcon, HamburgerIcon,
  LinkIcon, CheckIcon, TriangleDownIcon,
  WarningTwoIcon, SmallCloseIcon,
} from '@chakra-ui/icons'

const MachineList =(props)=> { 
  const s = useColorModeValue('#fff', '#000')
return ( <>

<Container as="section" bg="white" py={2} pl={2} pr={2}
  css={{borderRadius: "8px"}}
  boxShadow="0px 0px 40px rgba(0, 0, 0, 0.13)"
  className={props.light && props.color.theme4}
> <TriangleDownIcon css={{ position: 'absolute', right: 0, marginRight: '90px', height: '20px'}}
    _hover={{cursor: 'pointer', color: "brand.s4vitarGreenTeam"}} color="#e06c" 
    onClick={()=>window.scroll({top: 0,top: 99999999999, behavior: 'smooth'})}
  />

  { props.objetosFiltrados.length!==0? 

    props.objetosFiltrados.map( 
      obj=> { return ( <React.Fragment key={obj.sku} >
        <Container as="article"
          bg="white" p={8} mb={8} mt={8}
            textAlign={'left'}
            css={{borderRadius: "8px"}}
          boxShadow={"0px 0px 40px rgba(0, 0, 0, 0.13)"}
          className={props.light && props.color.theme4}
        >
          <Box p={13} flex='true' color={s}
            __css={{ lineHeight: '1.5', }}
            className={props.light && props.color.theme2}
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
  <TriangleUpIcon css={{position: 'absolute', right: 0, marginTop: '-20px',marginRight: '90px', height: '20px'}}
    _hover={{cursor: 'pointer', color: 'brand.800'}} color="#61afef"
    onClick={()=>window.scroll({top: 0,top: 0, behavior: 'smooth'})}
  />
</Container>

</> ) }; export {MachineList};