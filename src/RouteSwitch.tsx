import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import NavBar from "./components/NavBar";
import { CartItem, CartType } from "./utils/Types";

const RouteSwitch = () => {
	const [cart, updateCart] = useState({
		items: [],
	} as CartType);

	const addToCart = (newCartItem: CartItem): void => {
		const newCart = Object.assign({}, cart);
		const find = newCart.items.find(
			(cartItem) => cartItem.item === newCartItem.item
		);
		if (find) {
			find.amount = newCartItem.amount;
		} else {
			newCart.items.push(newCartItem);
		}
		updateCart(newCart);
	};

	return (
		<BrowserRouter>
			<NavBar cartCount={cart.items.length} />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
				<Route path="/cart" element={<Cart cart={cart} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouteSwitch;
