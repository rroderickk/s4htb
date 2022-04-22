import React from "react";
import ReactDOM from "react-dom";
import { App } from "@routes/App";
import { ChakraProvider } from "@chakra-ui/react";

import ThemeContext from "../src/components/ThemeContext";
import { Theme } from "./components/Theme";

const style = {
  theme1: "dark",
  theme2: "whiteContrast",
  theme3: "black",
  theme4: "negro",
};

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <ThemeContext.Provider value={style}>
        <App/>
      </ThemeContext.Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);