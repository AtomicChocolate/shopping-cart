import React from "react";
import uniqid from "uniqid";
import items from "../utils/Items";
import { CartItem, CartType } from "../utils/Types";
import Product from "./Product";

type Props = { cart: CartType; addToCart: (newCartItem: CartItem) => void };

const Catalog = (props: Props) => {
	return (
		<div>
			{items.map((item) => (
				<Product
					item={item}
					defaultAmount={
						props.cart.items.find((cartItemFind) => cartItemFind.item === item)
							?.amount || 1
					}
					addToCart={props.addToCart}
					key={uniqid()}
				/>
			))}
		</div>
	);
};

export default Catalog;
