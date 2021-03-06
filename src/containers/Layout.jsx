import * as React from "react";
import { motion } from 'framer-motion'
import { ThemeToggleButton } from '../components/ThemeToggleButton'
import { useColorModeValue } from '@chakra-ui/react'
import { Animate } from "../pages/Animate";
import { Box } from '@chakra-ui/react';

const Layout = ({ children })=> { 

const b = useColorModeValue("rgb(236, 242, 254)", "#21252e");
const styleLayout = {
	textAlign: "center",
	backgroundColor: b,
	minHeight: "100vh",
	padding: "40px 0px",
	minWidth: "100%",
	maxWidth: "100vw",
};

return (

<Box style={styleLayout}> 
	<motion.div 
		initial={{ y: -20, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		exit={{ y: 20, opacity: 0 }}
		transition={{ duration: 0.8 }}
	> 
		<ThemeToggleButton/> 
	</motion.div>
	<Animate>
		{children}
	</Animate>
</Box>

) }; export { Layout };