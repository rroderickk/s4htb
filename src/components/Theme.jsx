import { extendTheme } from "@chakra-ui/react"
import { mode        } from "@chakra-ui/theme-tools"

const styles ={
  global: props=> ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components ={
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Container: {
    baseStyle: {
      maxW: { base: '10px', md: '20px', s: '10px'},
    }
  },
  Link: {
    baseStyle: props=> ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts ={
  body: 'hack'
}
const config ={
  initialColorMode: 'dark',
  useSystemColorMode: true 
}
const colors ={
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
    100: '#fff',
    s4vitarBlueTeam: '#61afef',
    s4vitarRedTeam: '#e06c75',
    s4vitarGreenTeam: '#98c379',
  },
}

const Theme = extendTheme({ config, styles, components, fonts, colors })

export { Theme }