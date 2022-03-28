import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Catalog from "./components/Catalog";

const RouteSwitch = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/catalog" element={<Catalog />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouteSwitch;