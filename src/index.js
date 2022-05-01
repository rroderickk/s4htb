import React from "react";
import ReactDOM from "react-dom";
import { App } from "@routes/App";
import {  ColorModeScript, ChakraProvider } from "@chakra-ui/react";

import { Theme } from "./components/Theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <ColorModeScript initialColorMode={Theme.config.initialColorMode}/>
      <App/>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);