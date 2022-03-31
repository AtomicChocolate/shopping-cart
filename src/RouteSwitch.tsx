import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import NavBar from "./components/NavBar";
import { CartType } from "./utils/Types";

const RouteSwitch = () => {
	const [cart, updateCart] = useState({
		items: [],
	} as CartType);

	function AddToCart() {
		// todo
	}

	return (
		<BrowserRouter>
			<NavBar cartCount={cart.items.length} />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/catalog" element={<Catalog AddToCart={AddToCart} />} />
				<Route path="/cart" element={<Cart Cart={cart} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouteSwitch;
