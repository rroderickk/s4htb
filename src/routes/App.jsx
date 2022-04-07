import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@containers/Layout";
import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";

import { GlobalStyle } from "../GlobalStyle"
import "../_vars.scss"//(@)=>

const App =()=> { return (
	<BrowserRouter basename="/s4htb">
	<GlobalStyle/>
		<Layout>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	</BrowserRouter>
); }; export { App };
