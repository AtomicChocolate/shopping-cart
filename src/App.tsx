import React, { useState } from "react";
import RouteSwitch from "./RouteSwitch";
import { CartItem, CartType } from "./utils/Types";

const App = () => {
	const [cart, updateCart] = useState({
		items: [],
	} as CartType);

	const addToCart = (newCartItem: CartItem): void => {
		newCartItem.amount = Math.max(newCartItem.amount, 0);
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
		<>
			<RouteSwitch cart={cart} addToCart={addToCart} />
		</>
	);
};

export default App;
