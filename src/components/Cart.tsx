import React from "react";
import uniqid from "uniqid";
import { CartType } from "../utils/Types";
import CartItem from "./CartItem";

type Props = {
	cart: CartType;
};

const Cart = (props: Props) => {
	const setBuyAmount = (amount: number) => {
		//todo
	};

	return (
		<div>
			{props.cart.items.map((item) => (
				<CartItem item={item} setBuyAmount={setBuyAmount} key={uniqid()} />
			))}
		</div>
	);
};

export default Cart;
