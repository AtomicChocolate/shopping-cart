import React, { useState } from "react";
import RouteSwitch from "./RouteSwitch";
import { CartItem, CartType } from "./utils/Types";

const App = () => {
	const [cart, updateCart] = useState({
		items: [],
	} as CartType);

	const addToCart = (newCartItem: CartItem): void => {
		const newCart = Object.assign({}, cart);
		const find = newCart.items.find(
			(cartItem) => cartItem.item === newCartItem.item
		);
		if (find) {
			if (newCartItem.amount === 0) {
				newCart.items.splice(newCart.items.indexOf(find), 1);
				updateCart(newCart);
				return;
			}
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
