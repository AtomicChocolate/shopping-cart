import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import NavBar from "./components/NavBar";
import { CartItem, CartType } from "./utils/Types";

type Props = {
	cart: CartType;
	addToCart: (value: CartItem) => void;
};

const RouteSwitch = (props: Props) => {
	return (
		<BrowserRouter>
			<NavBar cartCount={props.cart.items.length} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/catalog"
					element={<Catalog cart={props.cart} addToCart={props.addToCart} />}
				/>
				<Route
					path="/cart"
					element={<Cart cart={props.cart} addToCart={props.addToCart} />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default RouteSwitch;
