import React from "react"
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, 
  useColorModeValue,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton =()=> { 
  const { toggleColorMode } = useColorMode();

return ( <motion.div style={{ display: 'inline-block' }}
  initial={{ y: -30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: 20, opacity: 0 }}
  transition={{ duration: 0.9 }}
> <AnimatePresence exitBeforeEnter initial={false}>
    <motion.div style={{ display: 'inline-block' }}
      key={useColorModeValue('light', 'dark')}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.4 }}
    > <IconButton aria-label="Toggle theme"
        bg="transparent" rounded="full"
        colorScheme={useColorModeValue('purple', 'yellow')}
        icon={
          useColorModeValue( 
            <MoonIcon bg="transparent" color="tomato" w={8} h={8}/>, 
            <SunIcon color="gray.500" w={8} h={8}/>
          )
        }
        onClick={toggleColorMode}
      />
    </motion.div>
  </AnimatePresence>
</motion.div> ) }; export { ThemeToggleButton} 