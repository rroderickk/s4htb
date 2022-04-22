import * as React from "react";
import { motion } from 'framer-motion'
import { ThemeToggleButton } from '../components/ThemeToggleButton'
import { useColorModeValue } from '@chakra-ui/react'

const Layout = ({ children })=> { 

const b = useColorModeValue("rgb(236, 242, 254)", "#21252e");
const styleLayout = {
	textAlign: "center",
	backgroundColor: b,
	minHeight: "100vh",
  minWidth: "100%",
	padding: "40px 10px",
	maxWidth: "100vw",
};

return (

<div style={styleLayout}> 
	<motion.div style={{ display: 'inline-block' }}
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: 20, opacity: 0 }}
			transition={{ duration: 0.8 }}
	> <ThemeToggleButton/> </motion.div>
		{children}
</div>

) }; export { Layout };