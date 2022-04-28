import React from "react";
import { Container, Heading, useColorModeValue,
	Text, Input, Tabs, TabList, 
	TabPanels, Tab, TabPanel,
	InputGroup, InputLeftElement,
} from '@chakra-ui/react';
import { useSearchHook, NotFound, } from "../components/useSearchHook2";
import { MachineList } from "../components/MachineList";
import { SearchIcon, } from "@chakra-ui/icons";
import { Neofetch } from '../components/Neofetch.jsx';
import { Animate } from "./Animate";

const Home =()=> { 
	const {
		searchValue,
    setSearchValue, 
    searchedText,
	} = useSearchHook();
	const c = useColorModeValue("#e1e7f2", "#111111")
	const handleChange =e=> setSearchValue(e.target.value)

return ( <> <Animate>

<Container as='main' fontFamily={'Hack'} centerContent maxW={'1355px'}> 
	<Container as='header' centerContent>
		<Heading as='h1' style={{
				marginTop: '40px',
				fontSize: '2.1rem',
				filter: 'blur(0.6px)',
			}}
		> S4vitar Machine's Resolutions </Heading>

		<Heading as='h2' style={{
				fontSize: '1.3rem',
				filter: 'contrast(0.2)',
				fontWeight: '100',
				marginTop: '40px',
				filter: 'contrast(0.1) blur(0.4px)',
			}}
			> Resolved things </Heading><br/><br/>
	</Container>

	<Container as='section'>
		<Tabs variant='enclosed' isFitted>
			<TabList css={{ justifyContent: 'center',
					filter: 'contrast(0.8) blur(0.4px)',
				}} mb='1em'
			> <Tab fontFamily={'Hack'}  color="#e06c76"
					style={{backgroundColor: "transparent", border:"none"}}
					_selected={{ color: '#98c379', bg: 'transparent', border: "none" }}
					_active={{ color: '#98c379', bg: 'transparent', }}
				> <Text style={{ fontSize: "24px", fontWeight: "100", }} 
					>Machines</Text>
				</Tab>
				<Tab fontFamily={'Hack'} color="#e06c76"
					style={{backgroundColor: "transparent", border:"none"}}
					_selected={{ color: '#98c379', bg: 'transparent', border: "none" }}
				> <Text style={{ fontSize: "24px",
							fontWeight: "100",
							background: "transparent",
						}} 
					>About</Text>
				</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
				<InputGroup>
					<InputLeftElement 
						children={
							<SearchIcon w={'6'} h={'6'} mt={'2'} ml={'10'}
								sx={{filter: "contrast(0.1)",
									'&:hover': {
										filter: 'contrast(0.9)',
										transition: 'filter 0.2s ease-in-out',
									},
								}}
							/>
						}
					/>

					<Input border="none" autoFocus _focus={{bg: c, border: "none"}}
						type='search' placeholder='Search (filter by) name, so, difficulty, skills, like.'
						size='lg' fontSize={'20px'} borderRadius={'8px'}
						minW={'280px'} w="100%" pb={4} pl={20} pt={4}
						mb={8} onChange={handleChange}
					/>
				</InputGroup>

					<MachineList 
						objetosFiltrados={searchedText}
						NotFound={()=> NotFound(searchValue)}
					/>
				</TabPanel>

				<TabPanel>
					<Neofetch/>
				</TabPanel>

			</TabPanels>
		</Tabs>
	</Container>
</Container>

</Animate> </>	); }; export { Home };