import React from "react";
import uniqid from "uniqid";
import items from "../utils/Items";
import { CartItem } from "../utils/Types";
import Product from "./Product";

type Props = { addToCart: (newCartItem: CartItem) => void };

const Catalog = (props: Props) => {
	return (
		<div>
			{items.map((item) => (
				<Product item={item} addToCart={() => alert("todo")} key={uniqid()} />
			))}
		</div>
	);
};

export default Catalog;
