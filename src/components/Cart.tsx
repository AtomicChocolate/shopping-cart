import React from "react";
import uniqid from "uniqid";
import { CartType } from "../utils/Types";
import CartItem from "./CartItem";

type Props = {
	Cart: CartType;
};

const Cart = (props: Props) => {
	return (
		<div>
			{props.Cart.items.map((item) => (
				<CartItem item={item} key={uniqid()} />
			))}
		</div>
	);
};

export default Cart;
