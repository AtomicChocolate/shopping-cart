import React from "react";
import ReactDOM from "react-dom";
import RouteSwitch from "./RouteSwitch";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Colors from "./styles/Theme";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={Colors}>
			<GlobalStyle />
			<RouteSwitch />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
